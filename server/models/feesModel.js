const mongoose = require('mongoose')

const feesSchema = new mongoose.Schema({
    
    userId:{
        required: true,
        type: String,
    },
    instOneAmount: {
        required: true,
        type: Number,
        default: 0
    },
    instTwoAmount: {
        required: true,
        type: Number,
        default: 0
    },
    instThreeAmount: {
        required: true,
        type: Number,
        default: 0
    },
    instOneStatus: {
        required: true,
        type: Boolean,
        default: false
    },
    instTwoStatus: {
        required: true,
        type: Boolean,
        default: false
    },
    instThreeStatus: {
        required: true,
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model("Fees",feesSchema)