const app = require('./midlewares/app');
const handle = app.getRequestHandler();
const server = require('./midlewares/server');
const http = require('http').createServer(server);
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const mongoose = require('./midlewares/mongoose');
const UserSchema = require('./models/user');
const PostSchema = require('./models/post');
const client = require('./midlewares/client');

const hashCreator = (toHash) => {
  const hash = [];
  const keys = Object.keys(JSON.parse(toHash));
  const values = Object.values(JSON.parse(toHash));
  for(let i = 0; i < keys.length; i++){
    hash.push(keys[i]);
    if(Array.isArray(values[i])){
      hash.push(JSON.stringify(values[i]));
    } else {
      hash.push(values[i]);
    }
    
  }
  return hash;
}

[...mongoose];

app.prepare().then(()=> {

  server.post('/user/register', async (req, res) => {
    try{
      const { mail, pass } = req.body;
      const mailExist = await UserSchema.findOne({ mail });
      if(mailExist){
        return res.status(200).send('mail');
      } else {
        const newUser = new UserSchema({ mail, pass });
        await newUser.save();
        const greenPost = new PostSchema({ green: true, img: `/static/random/r${Math.floor((Math.random() * 16) +1)}.jpg`, author: newUser._id });
        await greenPost.save();
        //const hash = hashCreator(JSON.stringify(newUser));
        //await client.hmsetAsync(`user:${newUser._id}`, hash);
        const data = { newUser, greenPost };
        req.session.user = data;
        res.status(200).json(data);
      }
    }catch(err){
      console.log(err);
      res.sendStatus(500);
    }
  });

  server.post('/user/login', async (req, res) => {
    try{
      const { mail, pass } = req.body;
      const existUser = await User.findOne({ mail });
      if(existUser){
        if(existUser.pass === pass){
          req.session.user = existUser;
          return res.status(200).json(existUser);
        } else{
          return res.status(200).send('pass');
        }
      }
      return res.status(200).send('mail');
    }catch(err){
      console.log(err);
      return res.sendStatus(500);
    }
  });

  server.post('/post/add', async (req, res) => {
    const newPost = new Post(req.body);
    console.log(req.body);
    //res.status(200).json(req.body);
    const addnewPost = await newPost.save();
    res.status(200).json(addnewPost);
  });

  server.get('/post/get/:id', async (req, res) => {
    try{
      const { id } = req.params;
      const posts = await Post.find({ author: id });
      console.log(posts);
      res.status(200).json(posts);
    }catch(err){
      console.log(err);
    }
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  http.listen(port, ()=> console.log(`server on PORT ${port}`));
});

//http.listen(port, ()=> console.log(`server on PORT ${port}`));