const app = require('./midlewares/app');
const handle = app.getRequestHandler();
const server = require('./midlewares/server');
const http = require('http').createServer(server);
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const mongoose = require('./midlewares/mongoose');
const UserSchema = require('./models/user');
const client = require('./midlewares/client');

[...mongoose];

app.prepare().then(()=> {

  server.post('/user/register', async (req, res) => {
    try{
      const { mail, pass } = req.body;
      const mailExist = await UserSchema.findOne({ mail });
      if(mailExist){
        console.log(mailExist);
        res.sendStatus(401);
      } else {
        const newUser = new UserSchema(req.body);
        const addUser = await newUser.save();
        await client.setAsync(`user:${addUser.id}`, JSON.stringify(addUser));
        req.session.user = addUser;
        res.status(200).json(addUser);
      }
    }catch(err){
      console.log(err);
      res.sendStatus(500);
    }
  });

  server.post('/user/login', async (req, res) => {
    try{
      const { mail, pass } = req.body;
      const existUser = await UserSchema.findOne({ mail });
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


  server.get('*', (req, res) => {
    return handle(req, res);
  })

  http.listen(port, ()=> console.log(`server on PORT ${port}`));
});

