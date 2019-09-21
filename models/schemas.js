const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    owner: { type: Boolean, default: true },
    mail: String,
    pass: String,
    name: { type: String, default: 'Green' },
    lastName: { type: String, default: 'User' },
    birthday: { type: Date, default: '01/01/1970' },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    perfilImg: { type: String, default: `/static/random/r${Math.floor((Math.random() * 16) +1)}.jpg` },
    originCity: { type: String, default: "mundo" },
    actualCity: { type: String, default: 'mundo' },
    primaryShool: String,
    secondarySchoool: String,
    university: String,
    job: String,
    interest: Array,
    events: Array,
    wallet: { type: Number, default: 0 },
    friends: Array,
    notes: Array,
    gifts: Array,
  });

  const PostSchema = new Schema({
    green: { type: Boolean, default: false },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    img: { type: String, default: '' },
    history: { type: String, default: '' },
    comments: Array,
    likes: Array,
});

const User = mongoose.model('User', UserSchema);
const Post = mongoose.model('Post', PostSchema);

module.exports = {
    User,
    Post
};
