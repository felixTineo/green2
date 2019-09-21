const router = require('express').Router();
const UserSchema = require('../models/user');
const PostSchema = require('../models/post');

//const UserSchema = require('../models/schemas').User;
//const PostSchema = require('../models/schemas').Post;

router.post('/register', async (req, res) => {
  try{
    const { mail } = req.body;
    const checkMail = await UserSchema.findOne({ mail });
    if(checkMail){
      return res.status(200).send('mail');
    }
    const newUser = await new UserSchema(req.body).save();
    const newPost = await new PostSchema({ green: true, author: newUser._id, img: `/static/random/r${Math.floor((Math.random() * 16) +1)}.jpg` }).save();
    await UserSchema.findByIdAndUpdate(newUser._id, {
      $push: {
        posts: {
          $each: [newPost._id],
          $position: 0,
        }
      }
    });
    const user = await UserSchema.findById(newUser._id).populate('posts');
    user.owner = true;
    req.session.user = user;
    return res.status(200).json(user);
  }catch(err){
    console.log(err);
    return res.sendStatus(500);
  }
});

router.post('/login', async (req, res) => {
  try{
    const { mail, pass } = req.body;
    const checkUser = await UserSchema.findOne({ mail }).populate('posts');
    if(checkUser){
      if(checkUser.pass === pass){
        checkUser.owner = true;
        req.session.user = checkUser;
        return res.status(200).json(checkUser);
      } else {
        return res.status(200).send('pass');
      }
    }
    return res.status(200).send('mail');
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/perfil/:id', async (req, res)=> {
  try{
    const { id } = req.params;
    const user = await UserSchema.findById(id).populate('posts');
    if(req.session.user._id === id) {
      user.owner = true;
      return res.status(200).json(user);
    }
    return res.status(200).send(user);
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
