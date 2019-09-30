const router = require('express').Router();
const UserSchema = require('../models/user');
const GreenPostSchema = require('../models/greenpost');
const PostSchema = require('../models/post');
const Notifications = require('../classes/notifications');
const client = require('../midlewares/client');

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
    req.session.user = newUser;
    res.status(200).json(newUser);
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/login', async(req, res) => {
  try{
    const { mail, pass } = req.body;
    const user = await UserSchema.findOne({ mail }).populate('posts').populate('greenPost');
    if(!user) return res.status(200).send('mail');
    if(user.pass !== pass) res.status(200).send('pass');
    req.session.user = user;
    res.status(200).json(user);
  }catch(err){
    console.log(err);
    res.sendStatus(501);
  }
});

router.get('/notifications', async(req,res) => {
  try{
    const user = await UserSchema.findById(req.session.user._id);
    console.log(user);
    const notifications = new Notifications(user);
    res.status(200).json(notifications);
  }catch(err){
    console.log(err);
    res.sendStatus(501);
  }
});

router.get('/logout', async(req, res) => {
  try{
    await client.delAsync(`sess:${req.sessionId}`);
    req.session.destroy();
    res.end();
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;

/*router.post('/register', async(req, res) => {
  try{
    const { mail, pass } = req.body;
    const checkMail = await UserSchema.findOne({ mail });
    if(checkMail){
      return res.status(200).send('mail');
    }
    const newUser = new UserSchema(req.body);
    const greenPost = await new GreenSchema({ author: newUser.id }).save();
    newUser.greenPost = greenPost.id;
    const saved = await newUser.save();
    req.session.user = saved;
    return res.status(200).json(saved);
  }catch(err){
    console.log(err);
    res.status(501).send(err);
  }
});

/*router.get('/update', async(req, res)=> {
  await GreenSchema.findByIdAndUpdate('5d8951e5d024cb3cc391627f', { img: '/static/random/r16.jpg' });
  res.status(200).send();
})

router.post('/login', async(req, res) => {
  try{
    const { mail, pass } = req.body;
    const user = await UserSchema.findOne({ mail }).populate('posts').populate('greenPost');
    if(user){
      if(user.pass === pass){
        req.session.user = user;
        return res.status(200).json(user);
      } else {
        return res.status(200).send('pass');
      }
    }
    return res.status(200).send('mail');
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/notifications', async(req, res) => {
  try{
    const user = await UserSchema.findById(req.session.user._id);
    res.status(200).json(new Notifications(user));
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
})

router.get('/logout', async(req, res) => {
  try{
    await client.delAsync(`sess:${req.sessionId}`);
    req.session.destroy();
    res.end();
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
})

/*router.get('/green', async(req, res) => {
  try{
    const check = await UserSchema.findById(req.session.user._id).populate('greenPost');
    res.status(200).json(check);
  }catch(err){
    console.log(err);
    res.status(501).send(err);
  }
})

module.exports = router;*/
