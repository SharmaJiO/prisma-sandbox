require('dotenv').config()

const cookieParser = require('cookie-parser')
const express = require('express');
const app = express()

const userRouter = require('./src/routes/user.route')
const postRouter = require('./src/routes/post.route')


//regular middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cookie middleware
app.use(cookieParser())

app.listen(3000,()=>{
    console.log("server is running")
})

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/api',userRouter)
app.use('/post',postRouter)

