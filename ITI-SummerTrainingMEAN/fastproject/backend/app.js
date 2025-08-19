const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const PORT = 5000;

//enable cors
app.use(cors())
//enable json parser
app.use(express.json());

//route customer apis
const customerRoutes = require('./routes/customer')
//use
app.use('/api/customers', customerRoutes);
app.get('/', (req,res) => {
    res.send("Welcome to customers api")
})


main().catch((error) => {
    console.log(error)
})

async function main(){
    const ConnectionString = "mongodb+srv://Tareks:SNDnkSMDASKDWm@cluster0.w0k6ff5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    mongoose.set('strictQuery', true)
    await mongoose.connect(ConnectionString)
}


app.listen(PORT,(error)=> {
    if(!error){
        console.log(`server is running on port ${PORT}`)
    }else{
        console.error('404')
    }
})