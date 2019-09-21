const app = require('./midlewares/app');
const server = require('./midlewares/server.js');
const handle = app.getRequestHandler();
const http = require('http').createServer(server);
const port = process.env.PORT || 3000;
const mongoose = require('./midlewares/mongoose');

const userRoutes = require('./routes/user');
const friendRoutes = require('./routes/friend-req');

app.prepare().then(()=> {

  server.use('/user', userRoutes);
  server.use('/friend', friendRoutes);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  http.listen(port, ()=> console.log(`server on port ${port}`));
});
