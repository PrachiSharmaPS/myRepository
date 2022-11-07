const jwt= require("jsonwebtoken");

const authenticate = function(req, res, next) {
    let token = req.headers["x-auth-token"];
    if(!token) {res.send({msg : "token is needed"})}
  
    let decodedToken = jwt.verify(token, "Niharika-sharma");
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });

     next() 
}
const authorise = function(req, res, next) {
   let token = req.headers["x-auth-token"]
       const validToken= jwt.verify(token,"Niharika-sharma")
        let userModified = req.params.userId
        if (!userModified) return res.send({msg : "user id is missing"})

        let userLoggedIn = validToken.userId
        if(userLoggedIn!=userModified) return res.send({msg:"not a valid user"})
    next()
}
module.exports.authorise=authorise
module.exports.authenticate=authenticate