const jwt = require("jsonwebtoken");
const userModel = require("../models/myModel");

const createUser=async function(req,res){

    try{
        const userData= req.body;
        if(Object.keys(userData).length !=0){
        let data=await userModel.create(userData)
        res.status(201).send({status:true,data:data})
    } else return res.status(400).send({msg:"bad request"})

    }
    catch(err) {
        console.log("this is error:",err.message)
        res.status(500).send({msg:err})
    }
   
   
}
const userLogin= async function(req,res){
    try {
    const{emailId,password}=req.body;
    if(!emailId && !password) res.status(400).send({status:false,msg:"eamil or password require"})
    const user= await userModel.findOne({emailId:emailId,password:password})
   if (!user) res.status(400).send({msg:"incorrect id or passward"})

    const token=jwt.sign({
        
            userId: user._id.toString(),

            organisation: "FUnctionUp",
          },
          "Niharika-sharma"
        );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, data: token });
        }
        catch(err) {
            console.log("this is error:",err.message)
            res.status(500).send({msg:err.message})
        }
}
//----------------------------------------------------------------------
    const getUser=async function(req,res){
      try{
         let userId = req.params.userId
      
        const userData=await userModel.findById(userId)
        res.status(200).send({msg:userData})
    }
    catch(err) {
        console.log("this is error:",err.message)
        res.status(500).send({msg:err.message})
    }
    }
    const updateData=async function(req,res){
        try{
        let userId=req.params.userId;
        let userData=req.body
        const updatedUserData= await userModel.findByIdAndUpdate({ _id: userId }, userData,{new:true})
    
        res.status(200).send({msg:updatedUserData})
        }
        catch(err) {
            console.log("this is error:",err.message)
            res.status(500).send({msg:err.message})
        }
    }

    const deleteData=async function(req,res){
        try{
        let userId=req.params.userId
        let data=req.body;
      
       const deletedUserData= await userModel.updateMany({ _id: userId },{$unset:data})
       const updatedUserData= await userModel.findByIdAndUpdate({ _id: userId },{isDeteted:true},{new:true})
        res.status(200).send({ update:updatedUserData})
        }catch(err) {
            console.log("this is error:",err.message)
            res.status(500).send({msg:err.message})
        }
    }
    
    
    
module.exports.createUser=createUser
module.exports.userlogin=userLogin
module.exports.getUser=getUser
module.exports.updateData=updateData
module.exports.deleteData=deleteData