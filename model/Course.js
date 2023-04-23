const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    CourseNum: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    AlphaCode: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Course', courseSchema);