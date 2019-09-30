const router = require('express').Router();
const UserSchema = require('../models/user');
const GreenPostSchema = require('../models/greenpost');
const PostSchema = require('../models/post');
const app = require('../midlewares/app');

router.get('/perfil/:_id', async(req, res) => {
  try{
    const { _id } = req.params;
    if(_id){
      const user = await UserSchema.findById(_id).populate('posts').populate('greenPost');
      req.session.user = user;
      return app.render(req, res, '/perfil', user);
    }
    res.end();
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
