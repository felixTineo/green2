const router = require('express').Router();
const upload = require('../midlewares/upload');
const PostSchema = require('../models/post');
const UserSchema = require('../models/user');
const ResumeUser = require('../classes/resume-user');

router.post('/add', upload.single('img'), async(req, res) => {
  try{
    const { targetId, history } = req.body;
    const img = req.file ? req.file.location : null;
    console.log(req.session.user);
    const author = new ResumeUser(req.session.user);
    const newPost = PostSchema({ history, targetId, author, img, date: Date.now()  });
    const saved = await newPost.save();
    await UserSchema.findByIdAndUpdate(targetId, { $push: { posts: { $each:[saved.id], $position:0 } } });
    res.status(200).json();
  }catch(err){
    console.log(err);
    res.status(200).send(err);
  }
});

router.get('/posts', async(req, res) => {
  try{
    const user = await UserSchema.findById(req.session.user._id).populate('posts');
    console.log(user);
    res.status(200).json(user);
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
})

module.exports = router;
