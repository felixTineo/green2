const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    targetId: { type: Schema.Types.ObjectId, ref: 'User' },
    author: Object,
    date: { type: Date, default: Date.now() },
    img: { type: String, default: '' },
    title: String,
    subTitle: String,
    history: { type: String, default: '' },
    comments: Array,
    gifts: { type: Number, default: 0 },
    likes: Array,
});

module.exports = mongoose.model('Post', PostSchema);
