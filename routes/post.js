const router = require('express').Router();
const upload = require('../midlewares/upload');
const PostSchema = require('../models/post');
const UserSchema = require('../models/user');
const ResumeUser = require('../classes/resume-user');
const uuid = require('uuid/v1');
const io = require('../midlewares/io');

router.get('/autolikes', async(req, res) => {
  try{
    const pids = await PostSchema.find({}, '_id');
    for(let id of pids){
      const post = await PostSchema.findByIdAndUpdate(id, {likes: Array(Math.floor(Math.random() * 100) +1).fill(0) }, { new: true });
      console.log(post.likes.length);
    }
    res.status(200).json(pids);
  }catch(err){
    console.log(err);
  }
})

router.post('/add', upload.single('img'), async(req, res) => {
  try{
    const { targetId, history, title, subTitle } = req.body;
    console.log(req.file);
    const img = req.file ? `/${req.file.path}` : null;
    const author = new ResumeUser(req.session.user);
    const newPost = PostSchema({ history, targetId, author, img, date: Date.now(), title, subTitle });
    await newPost.save();
    await UserSchema.findByIdAndUpdate(targetId, { $push: { posts: { $each:[newPost._id], $position:0 } } });
    return res.status(200).json(newPost);
  }catch(err){
    console.log(err);
    res.status(200).send(err);
  }
});

router.get('/posts/:index', async(req, res) => {
  try{
    const uid = req.session.user._id;
    const { index } = req.params;
    const startIndex = index === 0 ? 0 : index * 10;
    const stopIndex = startIndex + 10;
    const user = await UserSchema.findById(uid);
    const fids = user.friends.map(friend => friend._id);
    const ids = [uid, ...fids];
    const posts = await PostSchema.find({'author._id': { $in:ids } }).sort({ date: -1 });
    const data = posts.slice(startIndex, stopIndex);
    for(let p of data){
      console.log(p.date);
    }
    res.status(200).send(data);
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
});

router.post('/comment/:pid', async(req, res) => {
  try{
    const { pid } = req.params;
    const { comment } = req.body;
    console.log(pid, comment);
    const user = new ResumeUser(req.session.user);
    const newComment = {
      ...user,
      date: Date.now(),
      comment,
    };
    const payload = {
      id: uuid(),
      type: 'COMMENT',
      note: 'NOTES',
      user,
    }
    const post = await PostSchema.findByIdAndUpdate(pid, { $push:{ comments: newComment } });
    io.emit(`nav:${post.author}`, payload);
    res.status(200).send(newComment);
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
})

module.exports = router;
