const uuid = require('uuid/v1');

const person1 = {
  mail: String,
  pass: String,
  name: { type: String, default: 'Green' },
  lastName: { type: String, default: 'User' },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  greenPost: [{ type: Schema.Types.ObjectId, ref: 'GreenPost' }],
  perfilImg: { type: String, default: `/static/random/r${Math.floor((Math.random() * 16) +1)}.jpg` },
}
