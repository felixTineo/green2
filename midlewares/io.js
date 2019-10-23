const io = require('socket.io')();
const adapter = require('socket.io-redis');

io.adapter(adapter({
  host: 'localhost',
  port: 6379,
}));

module.exports = io;
