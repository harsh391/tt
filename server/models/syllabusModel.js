const mongoose = require('mongoose')

const syllabusSchema = new mongoose.Schema({
    sub: {
        required: true,
        type: String,
    },
    std: {
        required: true,
        type: String,
    },
    chapNo: {
        required: true,
        type: String,
    },
    chapName: {
        required: true,
        type: String,
    },
    chapStatus: {
        required: true,
        type: String,
    }
})

module.exports = mongoose.model("Syllabus", syllabusSchema)