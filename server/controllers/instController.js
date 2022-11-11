const Insts = require('../models/instModel')
// const Users = require('../models/userModel')

const createInst= async (req,res) => {
    try {
        const {std,instOne,instTwo,instThree} = req.body

        const temp = await Insts.findOne({std:std})

        if(temp) return res.status(400).json({msg:'Standard already exists.'})

        const inst = await Insts.create({std,instOne,instTwo,instThree})
        
        res.status(201).json(inst)
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

const updateInst = async (req,res) => {
    try {
        const id = req.params.id
        const {std,instOne,instTwo,instThree} = req.body

        const temp = await Insts.findOne({std:std})

        if(temp && temp.std!==std) return res.status(400).json({msg:'Standard already exists.'})

        const inst = await Insts.findByIdAndUpdate(id,{std,instOne,instTwo,instThree})
        
        res.status(201).json({msg: 'Success'})
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

const getInst = async (req,res) => {
    try {
        const insts = await Insts.find()

        res.status(201).json(insts)
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

module.exports = {createInst,getInst,updateInst}

