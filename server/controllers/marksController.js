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
        const id=req.user.id
        // const user = await Users.findById(id)
        // const tests = await Tests.find({std:user.std})
        const marks = await Marks.find({userId:id})

        // console.log(tests);
        // console.log(marks);

        // {marks.map((singleMark) => {
        //     const {testId,obtMarks} = singleMark
        //     tests.map((singleTest) => {
        //         const {sub,date,chap,totalMarks,_id} = singleTest
        //         if(testId===_id) {
        //             var item = {sub,date,chap,totalMarks,obtMarks}
        //             items.push(item)
        //         }
        //     })
        // })}
        // 
        // const getFunc = (marks) => {
        //     const promises = marks.map(async (mark) => {
        //         const userMarks = mark.marks                  
        //         const {date,sub,chap,totalMarks} = await Tests.findById(mark.testId)
        //         const item = {date,sub,chap,totalMarks,userMarks}
        //         items.push(item)    
        //         console.log(items);
        //     })
        //     return Promise.all(promises)
        // }
        
        // getFunc(marks)

        // console.log([...items]);

        res.status(201).json(marks)
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

module.exports = {getMarks, editMarks,getUserMarks}