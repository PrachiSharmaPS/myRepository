const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )
//--------------------------------------------------------
router.get("/getspecificData", BookController.getspecificData)
router.get("/getBookCount", BookController.getBookCount)
router.get("/getyear", BookController. getyear)
router.get("/getLetter", BookController.getLetter)
router.get("/getIndianPrice", BookController.getIndianPrice)
router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;