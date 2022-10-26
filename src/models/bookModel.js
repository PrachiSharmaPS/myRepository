const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type : String,
        require: true,
    } ,
    authorName: String, 
    tags: [String],
    
  
        indianPrice: Number,
        europePrice: String,
    
    year: {type: Number, default: 2021},
    totalPages:Number,
    stockAvailable: Number
}, { timestamps: true });


module.exports = mongoose.model('Bookcollection', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
