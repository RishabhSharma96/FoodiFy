require('dotenv').config()
const express = require('express')
const cors = require('cors')

require('./connection.js')

const server = express() 
const port = process.env.PORT 

// server.use(cors())

server.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers" ,
        "Origin, X-Requested-With ,Content-Type, Accept"
    )
    next()
})

server.use(express.json())
server.use('/api' , require('./routes/userRegAndLogin.js'))
server.use('/api' , require('./routes/displayData.js'))
server.use('/api' , require('./routes/orderData.js'))

server.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})