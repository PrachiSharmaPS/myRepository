const jwt= require("jsonwebtoken");
const userModel = require("../models/myModel");


const authenticate = async function(req, res, next) {
  try { 
    let token = req.headers["x-auth-token"];
    let userId = req.params.userId
    if(!token& !userId) {res.status(400).send({msg : "bad request"})}
  
    let decodedToken = jwt.verify(token, "Niharika-sharma");
    let user=await userModel.findById(userId)
    if (!decodedToken && !user) return res.send({ status: false, msg: "token is invalid" });

     next() }
     catch(err) {
        console.log("this is error:",err.message)
        res.status(500).send({error:err })
    }
}
const authorise = function(req, res, next) {
    try { 
   let token = req.headers["x-auth-token"]
       const validToken= jwt.verify(token,"Niharika-sharma")
        let userModified = req.params.userId

        let userLoggedIn = validToken.userId
        if(userLoggedIn!=userModified) return res.status(401).send({msg:"not a valid user"})
    next()
    }
    catch(err) {
        console.log("this is error:",err.message)
        res.status(500).send({msg:err})
    }
}
module.exports.authorise=authorise
module.exports.authenticate=authenticate