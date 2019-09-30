const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    targetId: { type: Schema.Types.ObjectId, ref: 'User' },
    author: Object,
    date: { type: Date, default: Date.now() },
    img: { type: String, default: '' },
    history: { type: String, default: '' },
    comments: Array,
    likes: Array,
});

module.exports = mongoose.model('Post', PostSchema);
