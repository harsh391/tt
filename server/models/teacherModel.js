const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    
    firstname:{
        required: true,
        type: String,
    },
    lastname: {
        required: true,
        type: String,
    },
    email:{
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    role: {
        required: true,
        type: String,
    },
    classes: [{
        std:String,
        sub:String
    }]
    // classes: {
    //     required: true,
    //     type: Array,
    // }
})

module.exports = mongoose.model("Teachers",teacherSchema)