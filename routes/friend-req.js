const router = require('express').Router();
const UserSchema = require('../models/user');
const ResumeUser = require('../classes/resume-user');
const io = require('../midlewares/io');
const uuid = require('uuid/v1');

router.get('/commonFriends/:tid', async(req, res) => {
  try {
    const { tid } = req.params;
    const targetUser = await UserSchema.findById(tid, 'friends');
    const currentUser = await UserSchema.findById(req.session.user._id, 'friends');
    const tFriends = targetUser.friends.filter(friend => friend.status === 0);
    const cFriends = currentUser.friends.filter(friend => friend.status === 0);
    const commonFriends = tFriends.filter((tFriend) => {
      for(cFriend of cFriends){
        return cFriend._id === tFriend._id
      }
    })
    //res.status(200).json();
    res.status(200).json(commonFriends);
  } catch (e) {
    console.log(e);
  }
})

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

router.get('/suggest', async(req, res)=> {
  try{
    const userFriends = await UserSchema.findById(req.session.user._id, "friends");
    const fids = userFriends.friends.map(friend => friend._id);
    const users = await UserSchema.find({ _id:{ $nin: [...fids, req.session.user._id] } });
    const suggest = users.map(user => new ResumeUser(user));
    res.status(200).json(suggest);
  }catch(e){
    console.log(e);
    res.sendStatus(500);
  }
})



module.exports = router;
