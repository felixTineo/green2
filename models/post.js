const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    green: { type: Boolean, default: false },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    img: { type: String, default: '' },
    history: { type: String, default: '' },
    comments: Array,
    likes: Array,
});

module.exports = mongoose.model('Post', PostSchema);
