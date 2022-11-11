const mongoose = require('mongoose')

const instSchema = new mongoose.Schema({
    
    std:{
        required: true,
        type: String,
    },
    instOne: {
        required: true,
        type: String,
    },
    instTwo: {
        required: true,
        type: String,
    },
    instThree: {
        required: true,
        type: String,
    },
})

module.exports = mongoose.model("Insts",instSchema)