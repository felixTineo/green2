const dotEnv = require('dotenv');
dotEnv.config();
const mongoose = require('mongoose');
//const mongoDB = process.env.URI_DB;
const mongoDB = process.env.URI_DB_LOCAL;
//const mongoDB = process.env.URI_DB_DOCKER;
mongoose.Promise = global.Promise;
const db = mongoose.connection;

module.exports = [
  mongoose.connect(mongoDB, { useFindAndModify: false, useNewUrlParser: true,  useUnifiedTopology: true  }),
  db.on('error', console.error.bind(console, 'Error la conexion a la base de datos fallo'))
];
