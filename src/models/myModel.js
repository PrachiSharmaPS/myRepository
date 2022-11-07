const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({

    firstName:String,
    lastName:String,
    
    mobile:{ 
        type:Number,
         require:true
            },
    emailId:String,
    password:String,
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    isDeteted:false,
    age:Number
},{timestamps:true})

module.exports = mongoose.model('authentication', userSchema)
