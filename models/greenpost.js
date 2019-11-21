const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GreenPostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now() },
  img: { type: String, default: `/static/random/r16.jpg` },
  title: String,
  subTitle: String,
  history: { type: String, default: '' },
  comments: Array,
  likes: Array,
  wish: {
    type: Object,
    default: {
      id: '',
      name: '',
      img: '',
      tag: '',
      price: 0,
      description:'',
      found: 0,
      sender: {},
    }
  },
});

module.exports = mongoose.model('GreenPost', GreenPostSchema);
