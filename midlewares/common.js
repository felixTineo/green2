const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const client = require('./client');
const session = require('express-session');
const redisSessionStore = require('connect-redis')(session);
const uuid = require('uuid/v1');
const dotenv = require('dotenv');
dotenv.config();

module.exports=[
  helmet(),
  compression(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  session({
    genid: (req) => uuid(),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { expires: 60000 * 60 * 12, secure: false},
    store: new redisSessionStore({ client, ttl: 86400 })
    //store: new redisSessionStore({ host: 'greenredis.3j3itc.0001.use2.cache.amazonaws.com', port: 6379, client: client, ttl :  260 })
  }),
];
