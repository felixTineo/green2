const router = require('express').Router();
const UserSchema = require('../models/user');
const GreenPostSchema = require('../models/greenpost');
const PostSchema = require('../models/post');
const app = require('../midlewares/app');

router.get('/perfil/:id', async(req, res) => {
  try{
    console.log(req.params.id);
    const user = await UserSchema.findById(req.params.id).populate('posts').populate('greenPost');
    return app.render(req, res, '/perfil', user);
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
