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
        await Marks.findOneAndUpdate(
            {_id:req.params.id},
            {marks: req.body.marks}
        )

        res.status(201).json('Success.')
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

module.exports = {getMarks, editMarks}