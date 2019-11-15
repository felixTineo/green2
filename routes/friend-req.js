const router = require('express').Router();
const UserSchema = require('../models/user');
const ResumeUser = require('../classes/resume-user');
const io = require('../midlewares/io');
const uuid = require('uuid/v1');

router.get('/foo', (req, res) => {
  const payload = 'hola'
  io.emit(`nav:${req.session.user._id}`, payload);
  return res.sendStatus(200);
})

router.get('/send/:id', async(req, res) => {
  try{
    const currentUser = req.session.user;
    const targetUser = await UserSchema.findById(req.params.id);
    const { name, lastName, perfilImg, mail  } = targetUser;
    const current = new ResumeUser(currentUser);
    current.status = 1;
    const target = new ResumeUser({ name, lastName, perfilImg, mail, _id: targetUser.id });
    target.status = 2;
    await UserSchema.findByIdAndUpdate(current._id, { $push: { friends: target } });
    await UserSchema.findByIdAndUpdate(target._id, { $push: { friends: current } });
    const payload = {
      id: uuid(),
      type: 'FRIEND',
      note: 'FRIEND',
      user: current,
    }
    io.emit(`nav:${targetUser._id}`, payload);
    return res.sendStatus(200);
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/accept/:id', async (req, res) => {
  try{
    const { id } = req.params;
    await UserSchema.updateOne({ '_id': req.session.user._id, 'friends._id': id },{
      $set:{'friends.$.status': 0}
    });
    await UserSchema.updateOne({ '_id': id, 'friends._id': req.session.user._id },{
      $set:{'friends.$.status': 0}
    });
    const user = new ResumeUser(req.session.user);
    user.action = 'ACCEPT';
    const payload = {
      id: uuid(),
      type: 'ACCEPT',
      note: 'NOTES',
      user,
    }
    io.emit(`nav:${id}`, payload);
    res.sendStatus(200);
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/cancel/:id', async(req, res) => {
  try{
    const current = req.session.user._id;
    const target = req.params.id;
    await UserSchema.findByIdAndUpdate(target, { $pull:{ friends: { _id: current } } });
    await UserSchema.findByIdAndUpdate(current, { $pull:{ friends: { _id: target } } });
    res.sendStatus(200);
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
})



module.exports = router;
