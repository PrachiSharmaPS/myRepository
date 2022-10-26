const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
//--------1--------
const getBookCount= async function (req, res) {
    const count= await BookModel.find( ).count()
   res.send({msg: count})
}  ///----to get specific data----2
const getspecificData= async function (req, res) {
    const specific= await BookModel.find( ).select({ bookName :1,authorName :1, _id:0})
   res.send({msg: specific})
} 
   //-----to get the book publish in centain year----3
   const getyear= async function (req, res) {
  const data = req.query.year
let year= await BookModel.find({year : data})
res.send({msg: year})
} 
//--------4
const getLetter= async function (req, res) {
   let allBooks= await BookModel.find({bookName:/^abcd/})
 res.send({msg: allBooks})
} 
 //--------5------------
 const getIndianPrice = async function (req, res) {   
    let allBooks=  await BookModel.find({indianPrice:{$in:[100,200,700]}
    });
 res.send({msg: allBooks})
}
//--------6-------------------------
const getRandomBooks = async function (req, res) {
    let random = await BookModel.find({totalPages:{$gt:300}},{stockAvailable:{$lt:200}});
    res.send({ msg: random});
  };

module.exports.createBook= createBook
module.exports.getspecificData= getspecificData
module.exports.getBookCount= getBookCount
module.exports. getyear=  getyear
module.exports. getLetter=  getLetter
module.exports.getIndianPrice= getIndianPrice
module.exports.getRandomBooks= getRandomBooks