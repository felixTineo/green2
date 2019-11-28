const router =  require('express').Router();
const io = require('../midlewares/io');
const UserSchema = require('../models/user');
const uuid = require('uuid/v1');

const greenLink = {
    fullName : 'GREENLINK',
    name : 'GREEN',
    lastName : 'LINK',
    mail : 'green@greenlink.com',
    _id : '00000000000000000000',
    perfilImg : '/static/random/r16.jpg',
    url : ``,
    action: 'TRANSACTION',
  }

router.get('/recycle/:id/:tip', async(req, res) =>{
  try{
    const { id, tip } = req.params;
    const update = await UserSchema.findByIdAndUpdate(id, { $inc:{ wallet: tip } }, { new: true });
    const payload = {
      id: uuid(),
      type: 'TRANSACTION',
      note: 'NOTES',
      user: greenLink,
      tip,
    }
    io.emit(`nav:${id}`, payload);
    return res.status(200).json(update);
  }catch(e){
    console.log(e);
    res.sendStatus(500);
  }
})

module.exports = router;
