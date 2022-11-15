require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./db/connect')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoutes')
const testRoutes = require('./routes/testRoutes')
const markRoutes = require('./routes/marksRoutes')
const feesRoutes = require('./routes/feesRoutes')
const syllabusRoutes = require('./routes/syllabusRoutes')
const instRoutes = require('./routes/instRoutes')
const teacherRoutes = require('./routes/teacherRoutes')
const paymentRoutes = require('./routes/paymentRoutes')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//middlewares

//routes
app.use('/user',userRoutes)
app.use('/api',testRoutes)
app.use('/api',markRoutes)
app.use('/api',feesRoutes)
app.use('/api',syllabusRoutes)
app.use('/api',instRoutes)
app.use('/teacher',teacherRoutes)
app.use('/api',paymentRoutes)

// Connect to mongodb
const PORT = process.env.PORT || 5000
const URI = process.env.MONGODB_URL
const start = async () => {
    try {
        await connectDB(URI)
        app.listen(PORT, () => {
        console.log('Server is running on port',PORT)
        })
    } catch (err) {
        console.log(err);
    }
}

start();