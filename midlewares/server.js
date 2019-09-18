const server = require('express')();
const common = require('./common');

server.set('trust proxy, 1');
server.use(...common);

module.exports = server;
