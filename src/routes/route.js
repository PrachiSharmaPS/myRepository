const express = require('express');
const router = express.Router();
const userController= require("../controllers/myUserController")
const commonMW = require("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )
 router.post("/login", userController.userLogin)
router.get("/users/:userId", commonMW.mid, userController.getUser)
 router.put("/users/:userId", commonMW.mid,userController.updateUser)
 router.get("/user/:userId", commonMW.mid,userController.deleteUser)

module.exports = router;