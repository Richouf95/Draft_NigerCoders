const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const profilRoutes = require('./routes/profilRoutes')
const cors = require('cors');

// express app
const app = express()

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json(
    {limit: '50mb'}
))

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// routes 
app.use('/user', userRoutes)
app.use('/post', postRoutes)
app.use('/profil', profilRoutes)

// connect to Data base
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // app listening port
        app.listen(process.env.PORT, () => {
            console.log('App connected to Db & Listening on port : ', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })

