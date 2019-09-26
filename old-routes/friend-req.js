const router = require('express').Router();
const UserSchema = require('../models/user');

class Resume{
  constructor({ name, lastName, mail, perfilImg, _id  }){
    this._id = _id;
    this.fullName = `${name} ${lastName}`;
    this.mail = mail;
    this.perfilImg = perfilImg;
    this.url = `/user/perfil/${_id}`;
  };
}

router.get('/send/:id', async (req, res) => {
  try{

    const { id } = req.params;
    const targetUserBd = await UserSchema.findById(id);
    const currentUserBd = await UserSchema.findById(req.session.user._id);

    const targetUser = new Resume({ name: targetUserBd.name, _id: targetUserBd.id, perfilImg: targetUserBd.perfilImg, name: targetUserBd.name, lastName: targetUserBd.lastName, mail: targetUserBd.mail });
    const currentUser = new Resume(req.session.user);

    console.log(targetUser);

    targetUser.status = 1;
    await UserSchema.findByIdAndUpdate(req.session.user._id, {
      $push: { friends: targetUser }
    });

    currentUser.status = 2;
    await UserSchema.findByIdAndUpdate(id, {
      $push: { friends: currentUser }
    });

    res.sendStatus(200);
  }catch(err){

    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/accept/:id', async (req, res) => {
  try{

    const { id } = req.params;

    await UserSchema.update({ '_id': req.session.user._id, 'friends._id': id },{
      $set:{'friends.$.status': 0}
    });
    await UserSchema.update({ '_id': id, 'friends._id': req.session.user._id },{
      $set:{'friends.$.status': 0}
    });
    
    res.sendStatus(200);
  }catch(err){

    console.log(err);
    res.sendStatus(500);

  }
});

router.get('/cancel/:id', async (req, res)=> {
  try{
    const { id } = req.params;
    const { _id } = req.session.user;
    await UserSchema.findByIdAndUpdate(_id, { $pull: { friends: { _id: id } } });
    await UserSchema.findByIdAndUpdate(id, { $pull: { friends: { _id: _id } } });
    res.sendStatus(200);
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
})

module.exports = router;
