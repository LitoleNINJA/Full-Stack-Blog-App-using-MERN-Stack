const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        photo: {
            type: String,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);