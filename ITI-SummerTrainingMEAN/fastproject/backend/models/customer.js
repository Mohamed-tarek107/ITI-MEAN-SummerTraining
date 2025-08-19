const mongoose = require('mongoose')

const customerschema = mongoose.Schema(
    {
        date:{
            type: Date,
            
        },
        name:{
            type:String,
            required:true
        },
        email:{
            type: String,
            required:true
        },
        phone:{
            type:String,
            required:true
        }
    }
)

const customer = mongoose.model('customers', customerschema)


module.exports = customer;