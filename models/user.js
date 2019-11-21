const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const UserSchema = new Schema({
  owner: { type: Boolean, default: false },
  firstTime: { type: Boolean, default: true  },
  mail: String,
  pass: String,
  name: { type: String, default: 'Green' },
  lastName: { type: String, default: 'User' },
  birthday: { type: Date, default: '01/01/1970' },
  sex: String,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  greenPost: [{ type: Schema.Types.ObjectId, ref: 'GreenPost' }],
  perfilImg: { type: String, default: `/static/random/r${Math.floor((Math.random() * 16) +1)}.jpg` },
  originCity: { type: String, default: "mundo" },
  actualCity: { type: String, default: 'mundo' },
  primaryShool: String,
  secondarySchoool: String,
  university: String,
  job: String,
  interest: Array,
  history: { type: String, default: 'Aun no, nos a contado su historia' },
  wish: Array,
  events: Array,
  wallet: { type: Number, default: 0 },
  friends: Array,
  notes: Array,
  gifts: Array,
  online: { type: Boolean, default: true },
  chatHistory: Array,
});

module.exports = mongoose.model('User', UserSchema);
