const mongoose = require('mongoose')

const marksSchema = new mongoose.Schema({
    testId:{
        required: true,
        type: String,
    },
    date:{
        type: String,
        required: true,
    },
    sub:{
        type: String,
        required: true,
    },
    chap:{
        type: String,
        required: true,
    },
    totalMarks: {
        type: String,
        reqduired: true,
    },
    userId:{
        required: true,
        type: String,
    },
    obtMarks: {
        required: true,
        type: Number,
        default: 0
    },
    userName: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("Marks",marksSchema)