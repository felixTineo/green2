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
    resave: false,
    saveUninitialized: false,
    cookie: { expires: 60000 * 60 * 12},
    store: new redisSessionStore({ client })
  }),
];
