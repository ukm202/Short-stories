const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }

},{timestamps: true});

const Story = mongoose.model('Story', storySchema);
module.exports = Story;