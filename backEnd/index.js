const cookieParser = require('cookie-parser')
const express = require("express")
const cors = require('cors')

require('dotenv').config()
const app = express()

app.use(cors())

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Cookie middleware
app.use(cookieParser())

const userRouter = require('./routes/userRoutes')
app.use('/api',userRouter)

const postRouter = require('./routes/postRoutes')
app.use('/api', postRouter)

// const authorRouter = require('./routes/authorRoutes')
// app.use('/api',authorRouter)

const booksRouter = require('./routes/booksRoutes')
app.use('/api', booksRouter)

app.get('/',(req,res)=>{
    res.send("Hi there")
})

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})