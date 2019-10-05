const router = require('express').Router();
const upload = require('../midlewares/upload');
const UserSchema = require('../models/user');
const GreenPostSchema = require('../models/greenpost');
const ResumeUser = require('../classes/resume-user');

router.get('/add', upload.single('img'), async(req, res) => {
  try{
    const img = req.file.location;
    const author = req.session.user._id;
    const { history, targetId } = req.body;
    const data = {
      author,
      img,
      history,
      date: Date.now();
    };
    const greenpost = new GreenPostSchema(data);
    await greenpost.save();
    await UserSchema.findByIdAndUpdate(author, { $push:{ greenPost: { $each: [greenpost._id], $position: 0 } } });
    res.status(200).json(greenpost);
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
})
