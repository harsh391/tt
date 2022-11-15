const Teachers = require('../models/TeacherModel')
// const Users = require('../models/userModel')

const createTeacher= async (req,res) => {
    try {
        const {firstname,lastname,role,classes,email,password} = req.body

        const temp = await Teachers.findOne({email:email})

        if(temp) return res.status(400).json({msg:'Teacher already exists.'})

        const teacher = await Teachers.create({firstname,lastname,role,classes,email,password})
        
        res.status(201).json(teacher)
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

const getTeacher = async (req,res) => {
    try {
        const id = req.params.id
        const teacher = await Teachers.findById(id)

        if(!teacher) return res.status(400).json({msg:'Teacher not found'})

        res.status(201).json(teacher)
        
    } catch (err) {
        res.status(500).json({msg:err.message})      
    }
}

const loginTeacher = async (req,res) => {
    try {
        const {email,password} = req.body

        const teacherEmail = await Teachers.findOne({email:email})

        if(!teacherEmail) return res.status(400).json({msg:"Email not found"})

        if(teacherEmail.password !== password) return res.status(400).json({msg:"Incorrect password"})

        res.status(201).json({msg:'Login Successfully',id:teacherEmail._id})
        
    } catch (err) {
        res.status(500).json({msg:err.message})        
    }
}

module.exports = {createTeacher,getTeacher,loginTeacher}