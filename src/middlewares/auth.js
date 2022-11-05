const jwt= require("jsonwebtoken");
const mid=function (req, res, next) {
  let token = req.headers["x-auth-token"];

  if(!token) {res.send({msg : "token is needed"})}

  let decodedToken = jwt.verify(token, "functionup-lithium-very-secret-key");
  if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
   next()
}

module.exports.mid= mid