const app = require('./midlewares/app');
const server = require('./midlewares/server');
const http = require('http').createServer(server);
const handler = app.getRequestHandler();
const mongoose = require('./midlewares/mongoose');
const io = require('socket.io')(http);
const adapter = require('socket.io-redis');

io.adapter(adapter({
  host: 'localhost',
  port: 6379,
}));

const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');
const friendRoutes = require('./routes/friend-req');
const postRoutes = require('./routes/post');
const greenRoutes = require('./routes/greenpost');
const chatRoutes = require('./routes/chat');
const machineRoutes = require('./routes/machine');

app.prepare().then(()=> {

  io.on('connection', (socket) => {
    console.log('user conectado');
    socket.on('disconnect', ()=> console.log('user desconectado'));
  });
  server.use('/user', userRoutes);
  server.use('/friend', friendRoutes);
  server.use('/post', postRoutes);
  server.use('/green', greenRoutes);
  server.use('/chat', chatRoutes);
  server.use('/machine', machineRoutes);
  server.use('/', indexRoutes);
  server.get('*', handler);
  http.listen(3000, ()=> console.log('server on port 3000'));
});
