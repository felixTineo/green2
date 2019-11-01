const router = require('express').Router();
const UserSchema = require('../models/user');
const GreenPostSchema = require('../models/greenpost');
const PostSchema = require('../models/post');
const app = require('../midlewares/app');
const persons = require('../test/persons');

router.get('/perfil/:id', async(req, res) => {
  try{
    console.log(req.params.id);
    const user = await UserSchema.findById(req.params.id).populate('posts').populate('greenPost');
    if(req.session.user._id === req.params.id) user.owner = true;
    return app.render(req, res, '/perfil', user);
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
