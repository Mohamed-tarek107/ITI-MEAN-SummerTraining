const express = require('express')

const app = express()
const PORT = 5000;

app.get('/', (req,res) => {
    res.send("Welcome to customers api")
})

app.listen(PORT,(error)=> {
    if(!error){
        console.log(`server is running on port ${PORT}`)
    }else{
        console.error('404')
    }
})