const app = require('./midlewares/app');
const server = require('./midlewares/server.js');
const handle = app.getRequestHandler();
const http = require('http').createServer(server);
const port = process.env.PORT || 3000;
const mongoose = require('./midlewares/mongoose');
const UserSchema = require('./models/user');

const userRoutes = require('./routes/user');
const friendRoutes = require('./routes/friend-req');
const postRoutes = require('./routes/post');

app.prepare().then(()=> {

  //server.use('/user', userRoutes);
  //server.use('/friend', friendRoutes);
  //server.use('/post', postRoutes);

  server.get('/perfil/:id', async(req, res) => {
    try{
      const { id } = req.params;
      console.log(id);
      const user = await UserSchema.findById(id).populate('posts').populate('greenPost');
      return app.render(req, res, '/perfil', user );
    }catch(err){
      console.log(err);
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  http.listen(port, ()=> console.log(`server on port ${port}`));
});

//http.listen(port, ()=> console.log(`server on port ${port}`));
