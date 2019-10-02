const router = require('express').Router();
const UserSchema = require('../models/user');
const GreenPostSchema = require('../models/greenpost');
const PostSchema = require('../models/post');
const Notifications = require('../classes/notifications');
const client = require('../midlewares/client');
const upload = require('../midlewares/upload');

router.post('/register', async(req, res) => {
  try{
    const { mail } = req.body;
    const checkMail = await UserSchema.findOne({ mail });
    if(checkMail) return res.status(200).send('mail');
    const newUser = new UserSchema(req.body);
    const newPost = new GreenPostSchema({ author: newUser.id });
    newUser.greenPost = newPost.id;
    await newUser.save();
    await newPost.save();
    console.log(req.session.user);
    req.session.user = {};
    delete req.session.user;
    console.log(req.session.user);
    req.session.user = newUser;
    console.log(req.session.user);
    res.status(200).json(newUser);
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
      perfilImg: req.file.location,
    };
    console.log(update);
    const id = req.session.user._id;
    console.log(id);
    await UserSchema.findByIdAndUpdate(id, update);
    res.sendStatus(200);
  }catch(err){
    res.status(200).send(err);
  }
})

router.post('/login', async(req, res) => {
  try{
    const { mail, pass } = req.body;
    const user = await UserSchema.findOne({ mail }).populate('posts').populate('greenPost');
    if(!user) return res.status(200).send('mail');
    if(user.pass !== pass) res.status(200).send('pass');
    console.log(req.session.user);
    req.session.user = {};
    delete req.session.user;
    console.log(req.session.user);
    req.session.user = user;
    console.log(req.session.user);
    setTimeout(()=> res.status(200).json(user), 10000);
  }catch(err){
    console.log(err);
    res.sendStatus(501);
  }
});

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
