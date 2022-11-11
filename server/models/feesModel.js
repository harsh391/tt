const mongoose = require('mongoose')

const feesSchema = new mongoose.Schema({
    
    userId:{
        required: true,
        type: String,
    },
    instOneStatus: {
        required: true,
        type: String,
    },
    instTwoStatus: {
        required: true,
        type: String,
    },
    instThreeStatus: {
        required: true,
        type: String,
    },
})

module.exports = mongoose.model("Fees",feesSchema)