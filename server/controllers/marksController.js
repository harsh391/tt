const Marks = require('../models/marksModel')
const Users = require('../models/userModel')
const Tests = require('../models/testModel')
const { findByIdAndUpdate, findOneAndUpdate } = require('../models/testModel')

const getMarks = async(req,res) => {
    try {
        const marks = await Marks.find({testId:req.params.id})
        
        //getting users
        // let users = []
        // const tempUsers = await Users.find({std:test.std,medium:test.medium,board:test.board})
        //subject validation
        // tempUsers.map((user) => {
        //     user.sub.map((subb) => {
        //         if(subb === test.sub) {
        //             users = [...users,user]
        //             // console.log('hello');
        //         }
        //     })
        // })

        res.status(201).json({marks})

    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

const editMarks = async(req,res) => {
    try {
        const obtMarks = req.body.obtMarks
        await Marks.findOneAndUpdate(
            {_id:req.params.id},
            {marks:obtMarks}
        )

        res.status(201).json({msg:'Success.'})
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

const getUserMarks = async(req,res) => {
    try {
        const id=res.user.id
        const user = await Users.findById(id)
        // const tests = await Tests.find({std:user.std},{medium:user.medium},{board:user.boards})
        const marks = await Marks.find({userId:id})

        res.status(201).json({marks})
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

module.exports = {getMarks, editMarks,getUserMarks}