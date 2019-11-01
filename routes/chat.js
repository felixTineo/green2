const router = require('express').Router();
const UserSchema = require('../models/user');
const io = require('../midlewares/io');
const ResumeUser = require('../classes/resume-user');
const ChatUser = require('../classes/chat-user');

router.get('/all', async(req, res) => {
  try{
    const friends = await UserSchema.findById(req.session.user._id, 'friends');
    let fids = [];
    for(let friend of friends.friends){
      if(friend.status === 0) fids.push(friend._id);
    };
    const friendsOn = await UserSchema.find({ _id: { $in:fids }, online: true });
    const resumeOn = friendsOn.map((user) => new ChatUser(user));
    res.status(200).json(resumeOn);
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/private/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const data = await UserSchema.findById(req.session.user._id, 'chatHistory');
    const chat = data.chatHistory.find(conversation => conversation._id === id );
    res.status(200).json(chat.chat);
  } catch (e) {
    console.log(e);
  }
})

router.post('/send', async(req, res) => {
  try{
    const { msg, tid } = req.body;
    const currentUser = new ChatUser(req.session.user);
    const targetBd = await UserSchema.findById(tid)
    const { name, lastName, perfilImg, mail  } = targetBd;
    const targetUser = new ChatUser({ name, lastName, perfilImg, mail, _id: targetBd.id });
    const payload = {
      currentUser,
      msg
    };
    io.emit(`private:${tid}`, payload);
    io.emit(`notification:${tid}`, currentUser._id);
    const current = await UserSchema.findById(currentUser._id);
    const currentHistoryExist = current.chatHistory.find(user => user._id === tid);
    const targetHistoryExist = targetBd.chatHistory.find(user => user._id === currentUser._id);
    if(currentHistoryExist){
      await UserSchema.updateOne({ '_id': currentUser._id, 'chatHistory._id': tid }, { $push: { 'chatHistory.$.chat': msg } });
    } else {
      const update = {
        ...targetUser,
        chat: [msg]
      }
      await UserSchema.findByIdAndUpdate(currentUser._id, { $push: { chatHistory: update } });
    }
    if(targetHistoryExist){
      await UserSchema.updateOne({ '_id': tid, 'chatHistory._id':currentUser._id }, { $push: { 'chatHistory.$.chat': msg } });
    } else{
      const update = {
        ...currentUser,
        chat: [msg],
      }
      await UserSchema.findByIdAndUpdate(tid, { $push: { chatHistory: update } });
    }

    res.sendStatus(200);

  }catch(err){
    console.log(err);
  }
});

module.exports = router;
