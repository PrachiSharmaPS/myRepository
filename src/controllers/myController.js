const jwt = require("jsonwebtoken");
const userModel = require("../models/myModel");

const createUser=async function(req,res){
    const userData= req.body;
    const data=await userModel.create(userData)
    res.send({status:true,data:data})
}
const userLogin= async function(req,res){
    const{emailId,password}=req.body;
    if(!emailId && !password) res.send({status:false,msg:"eamil or password require"})
    const user= await userModel.findOne({emailId:emailId,password:password})
   if (!user) res.send({msg:"incorrect id or passward"})

    const token=jwt.sign({
        
            userId: user._id.toString(),

            organisation: "FUnctionUp",
          },
          "Niharika-sharma"
        );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
}
//----------------------------------------------------------------------
    const getUser=async function(req,res){
      
         let userId = req.params.userId
      
        const userData=await userModel.findById(userId)
        res.send({msg:userData})
    }
    const updateData=async function(req,res){
        let userId=req.params.userId;
        let userData=req.body
        const updatedUserData= await userModel.findByIdAndUpdate({ _id: userId }, userData,{new:true})
    
        res.send({msg:updatedUserData})
    }

    const deleteData=async function(req,res){
        let userId=req.params.userId
        let data=req.body;
      
       const deletedUserData= await userModel.updateMany({ _id: userId },{$unset:data})
       const updatedUserData= await userModel.findByIdAndUpdate({ _id: userId },{isDeteted:true},{new:true})
        res.send({ update:updatedUserData})
    }
    
module.exports.createUser=createUser
module.exports.userlogin=userLogin
module.exports.getUser=getUser
module.exports.updateData=updateData
module.exports.deleteData=deleteData