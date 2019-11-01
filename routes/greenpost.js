const router = require('express').Router();
const upload = require('../midlewares/upload');
const UserSchema = require('../models/user');
const GreenPostSchema = require('../models/greenpost');
const ResumeUser = require('../classes/resume-user');
const io = require('../midlewares/io');
const uuid = require('uuid/v1');

router.get('/rest', async(req, res) => {
  const greenpost = await UserSchema.findById(req.session.user._id, "greenPost");
  await UserSchema.findByIdAndUpdate(greenpost._id, { gifts: [] });
  await GreenPostSchema.findByIdAndUpdate(greenpost.greenPost[0], { "wish.found": 0 });
  res.sendStatus(200);
});

router.post('/add', upload.single('img'), async(req, res) => {
  try{
    const img = `/${req.file.path}`;
    const author = req.session.user._id;
    const { title, subTitle, history } = req.body;
    const data = {
      author,
      img,
      title,
      subTitle,
      history,
      date: Date.now(),
    };
    const greenpost = new GreenPostSchema(data);
    await greenpost.save();
    await UserSchema.findByIdAndUpdate(author, { $push:{ greenPost: { $each: [greenpost._id], $position: 0 } } });
    res.status(200).json(greenpost);
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/like/:pid', async(req, res) => {
  try{
    const { pid } = req.params;
    const post = await GreenPostSchema.findById(pid, "likes");
    const checkLike = post.likes.find(like => like._id === req.session.user._id);
    if(checkLike){
      const like = await GreenPostSchema.findByIdAndUpdate(pid, { $pull:{ likes: { _id: req.session.user._id } } });
      return res.sendStatus(200);
    }
    const user = new ResumeUser(req.session.user);
    const like = await GreenPostSchema.findByIdAndUpdate(pid, { $push:{ likes: { $each:[user], $position: 0 } } });
    user.action = 'LIKE';
    const payload = {
      id: uuid(),
      type: 'REACTION',
      note: 'NOTES',
      user,
    }
    io.emit(`nav:${like.author}`, payload);
    res.status(200).json(user);
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/tip/:pid/:tip', async(req, res)=> {
  try{
    const { pid, tip } = req.params;
    const user = await UserSchema.findById(req.session.user._id, "wallet");
    if(user.wallet < tip){
      return res.status(200).send('credit');
    }
    const parseTip = parseInt(tip, 10);
    await UserSchema.findByIdAndUpdate(req.session.user._id, { $inc: { wallet: -parseTip } });
    const greenpost = await GreenPostSchema.findByIdAndUpdate(pid, { $inc: { 'wish.found': parseTip } }, { new: true }).lean();
    greenpost.wish.sender = { name: 'green', lastName:'link', fullName:'Green Link', _id:"000000", perfilImg: '/static/random/r1.jpg' };
    console.log(greenpost);
    if(greenpost.wish.price === greenpost.wish.found) {
      const payload = {
        id: uuid(),
        type: 'GIFT',
        note: 'GIFT',
        user: greenpost.wish,
      }
      await UserSchema.findByIdAndUpdate(greenpost.author, { $push: { gifts:{ $each:[greenpost.wish], $position: 0 } } });
      io.emit(`nav:${greenpost.author}`, payload);
      return res.status(200).send('complete')
    };
    res.status(200).send('done');
  }catch(err){
    console.log(err);
  }
});

router.post('/comment/add', async(req, res) =>{
  try{
    const { comment, pid } = req.body;
    const user = new ResumeUser(req.session.user);
    const newComment = {
      ...user,
      comment,
    }
    const payload = {
      id: uuid(),
      type: 'COMMENT',
      note: 'NOTES',
      user,
    }
    const post = await GreenPostSchema.findByIdAndUpdate(pid, { $push:{ comments: newComment } });
    io.emit(`green:${pid}`, newComment);
    io.emit(`nav:${post.author}`, payload);
    res.status(200).send();
  }catch(err){
    console.log(err);
    res.status(501).send(err);
  }
});

router.post('/wish', async(req, res) => {
  try{
    const { product } = req.body;
    const wish = {
      ...product,
      found:0,
      sender:{},
    };
    const user = await UserSchema.findById(req.session.user._id, 'greenPost');
    const gpid = user.greenPost[0];
    const added = await GreenPostSchema.findByIdAndUpdate(gpid, { wish }, { new: true });
    console.log(added);
    res.status(200).json(added.wish);
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
