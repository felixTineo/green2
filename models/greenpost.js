const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GreenPostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now() },
  img: { type: String, default: `/static/random/r16.jpg` },
  history: { type: String, default: '' },
  comments: Array,
  likes: Array,
    wish: {
      type: Object,
      default: {
        id: '123456789',
        name: 'Oreo',
        img: '/static/store/products/gol-1.jpg',
        tag: 'gol', price: 100,
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
        found: 0,
      }
    },
});

module.exports = mongoose.model('GreenPost', GreenPostSchema);
