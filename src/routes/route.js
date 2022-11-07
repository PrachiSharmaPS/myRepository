const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const myController= require("../controllers/myController")
const commonMW = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/users", userController.createUser)
// router.post("/login", userController.loginUser)
// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)
// router.put("/users/:userId", userController.updateUser)
//router.delete('/users/:userId', userController.deleteUser)

//-------------------
router.post("/users",myController.createUser)
router.post("/login",myController.userlogin)
router.get("/users/:userId",commonMW.authenticate,commonMW.authorise,myController.getUser)
router.put("/users/:userId",commonMW.authenticate,commonMW.authorise,myController.updateData)
router.delete("/users/:userId",commonMW.authenticate,commonMW.authorise,myController.deleteData)

module.exports = router;