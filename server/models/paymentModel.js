const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    
    userId:{
        required: true,
        type: String,
    },
    username:{
        required:true,
        type:String,
    },
    instOneStatus: {
        default: 'Unpaid',
        type: String,
    },
    instTwoStatus: {
        default: 'Unpaid',
        type: String,
    },
    instThreeStatus: {
        default: 'Unpaid',
        type: String,
    },
})

module.exports = mongoose.model("Payments",paymentSchema)