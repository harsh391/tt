const Teachers = require('../models/TeacherModel')
// const Users = require('../models/userModel')
const nodemailer = require('nodemailer')

const createTeacher= async (req,res) => {
    try {
        const {firstname,lastname,email} = req.body.teacher
        const classes = req.body.classes

        const temp = await Teachers.findOne({email:email})

        if(temp) return res.status(400).json({msg:'Teacher already exists.'})

        // password

        const password = Math.random().toString(36).slice(2)

        // Nodemailer

        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'thakartutorials@gmail.com',
                pass: 'tagsunhtsydyhlhl'
            }
        });


        let mailDetails = {
            from: 'thakartutorials@gmail.com',
            to: `${email}`,
            subject: 'Thakar Tutorials Portal Credentials',
            text: `Your email is ${email} and password is ${password}, use these credentials to log in.`
        };
        
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });

        const teacher = await Teachers.create({firstname,lastname,role:'Teacher',classes,email,password:password})
        
        res.status(201).json({creation:true})
        
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