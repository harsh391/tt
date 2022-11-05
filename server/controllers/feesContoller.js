const Fees = require('../models/feesModel')
// const Users = require('../models/userModel')

const createFees = async (req,res) => {
    try {
        const {userId,instOneAmount,instTwoAmount,instThreeAmount,instOneStatus,instTwoStatus,instThreeStatus} = req.body
        const user = await Fees.findOne({userId : userId})

        if(user) return res.status(400).json({msg: 'User not found'})

        const fee = await Fees.create({userId,instOneAmount,instTwoAmount,instThreeAmount,instOneStatus,instTwoStatus,instThreeStatus})
        
        res.status(201).json({fee})
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

const updateFees = async (req,res) => {
    try {
        const {userId, instOneAmount,instTwoAmount,instThreeAmount,instOneStatus,instTwoStatus,instThreeStatus} = req.body
        const user = await Fees.findOne({userId})

        if(!user) return res.status(201).json({msg: 'User not found'})

        const fee = await Fees.findByIdAndUpdate(user._id,{userId, instOneAmount,instTwoAmount,instThreeAmount,instOneStatus,instTwoStatus,instThreeStatus})
        
        res.status(201).json({msg: 'Success'})
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

const getFees = async (req,res) => {
    try {
        const userId = req.params.id
        const user = await Fees.findOne({userId})

        if(!user) return res.status(201).json({msg: 'User not found',isCreate:true})

        res.status(201).json(user)
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

module.exports = {createFees,getFees,updateFees}

