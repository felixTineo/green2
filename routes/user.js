const router = require('express').Router();
const UserSchema = require('../models/user');
const GreenPostSchema = require('../models/greenpost');
const PostSchema = require('../models/post');
const Notifications = require('../classes/notifications');
const client = require('../midlewares/client');
const upload = require('../midlewares/upload');
const ResumeUser = require('../classes/resume-user');
const search = require('../functions/search');
const io = require('../midlewares/io');

router.post('/register', async(req, res) => {
  try{
    const { mail, name } = req.body;
    const checkMail = await UserSchema.findOne({ mail });
    if(checkMail) return res.status(200).send('mail');
    const newUser = new UserSchema(req.body);
    const newPost = new GreenPostSchema({ author: newUser.id });
    newUser.greenPost = newPost.id;
    await newUser.save();
    await newPost.save();
    req.session.user = newUser;
    if(name){
      const user = new ResumeUser(newUser);
      await client.lpushAsync('users', JSON.stringify(user));
    }
    newUser.owner = true;
    console.log(newUser);
    res.status(200).send(newUser.id);
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/postregister', upload.single('perfilImg') ,async(req, res) => {
  try{
    const update = {
      ...req.body,
      firstTime: false,
      //perfilImg: req.file.location,
      perfilImg: `/${req.file.path}`,
      wallet: 50,
    };
    console.log(update);
    const id = req.session.user._id;
    const updated = await UserSchema.findByIdAndUpdate(id, update, { new: true });
    const user = new ResumeUser(updated);
    if(req.session.user.name === 'User') await client.lpushAsync('users', JSON.stringify(user));
    res.status(200).json(update);
  }catch(err){
    res.status(200).send(err);
  }
});

router.post('/login', async(req, res) => {
  try{
    const { mail, pass } = req.body;
    const user = await UserSchema.findOne({ mail }).populate('posts').populate('greenPost');
    if(!user) return res.status(200).send('mail');
    if(user.pass !== pass) res.status(200).send('pass');
    //req.session.user = {};
    //delete req.session.user;
    delete user.pass;
    user.owner = true;
    req.session.user = user;
    res.redirect(`/perfil/${user.id}`);
    //res.status(200).send(user.id);
  }catch(err){
    console.log(err);
    res.sendStatus(501);
  }
});

router.get('/perfil/:_id', async(req, res) => {
  try{
    const { _id } = req.params;
    console.log(req.session.user);
    const user = await UserSchema.findById(_id).populate('greenPost').populate('posts').lean();
    delete user.pass;
    if(_id === req.session.user._id){
      user.owner = true;
      console.log(_id);
      console.log(user.owner);
      return res.status(200).json(user);
    } else {
      console.log(user);
      return res.status(200).json(user);
    }
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
});

router.post('/gift', async(req, res) => {
  try{
    const { gift, uid, note } = req.body;
    const user = await UserSchema.findById(req.session.user._id, 'wallet');
    gift.price = parseInt(gift.price, 10);
    if(user.wallet < gift.price) return res.status(200).send('credit');
    await UserSchema.findByIdAndUpdate(req.session.user._id, { $inc: { wallet: -gift.price } });
    const sender = new ResumeUser(req.session.user);
    const newGift = {
      sender,
      ...gift,
    };
    console.log(newGift);
    await UserSchema.findByIdAndUpdate(uid, { $push:{ gifts: newGift } });
    const payload = {
      type: "GIFT",
      note: "GIFT",
      user: newGift,
    };
    io.emit(`nav:${uid}`, payload);
    res.sendStatus(200);
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
})

router.get('/notifications', async(req,res) => {
  try{
    const user = await UserSchema.findById(req.session.user._id);
    const notifications = new Notifications(user);
    res.status(200).json(notifications);
  }catch(err){
    console.log(err);
    res.sendStatus(501);
  }
});

router.get('/search/:name', async(req, res) => {
  try{
    const { name } = req.params;
    const suggest = await search(name, 'users');
    res.status(200).json(suggest);
  } catch(err){
    console.log(err);
  }
});

router.post('/update', async(req, res) => {
  try{
    const { key, value } = req.body;
    const newUser = await UserSchema.findByIdAndUpdate(req.session.user._id, { [key]: value }, { new: true }).lean();
    req.session.user= newUser;
    res.sendStatus(200);
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/logout', async(req, res) => {
  try{
    //await client.delAsync(`sess:${req.sessionId}`);
    return req.session.destroy((err) => {
      if(err) console.log(err);
      res.redirect('/');
    })
  }catch(err){
    console.log(err);
  }
});

module.exports = router;
