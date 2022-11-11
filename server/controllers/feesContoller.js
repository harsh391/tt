const Fees = require('../models/feesModel')
const Inst = require('../models/instModel')
// const Users = require('../models/userModel')

const createFees = async (req,res) => {
    try {
        const {userId,instOneStatus,instTwoStatus,instThreeStatus} = req.body
        const user = await Fees.findOne({userId : userId})

        if(user) return res.status(400).json({msg: 'User not found'})

        const fee = await Fees.create({userId,instOneStatus,instTwoStatus,instThreeStatus})
        
        res.status(201).json({fee})
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

const updateFees = async (req,res) => {
    try {
        const {userId,instOneStatus,instTwoStatus,instThreeStatus} = req.body
        const user = await Fees.findOne({userId})

        if(!user) return res.status(201).json({msg: 'User not found'})

        const fee = await Fees.findByIdAndUpdate(user._id,{userId,instOneStatus,instTwoStatus,instThreeStatus})
        
        res.status(201).json({msg: 'Success'})
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

const getFees = async (req,res) => {
    try {
        const userId = req.params.id
        const std = req.params.std

        const user = await Fees.findOne({userId:userId})
        const inst = await Inst.findOne({std:std})

        if(!inst) return res.status(201).json({msg:'Create Installments'})

        if(!user) return res.status(201).json({msg: 'User not found',isCreate:true,inst})

        res.status(201).json({user,std})
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

module.exports = {createFees,getFees,updateFees}

