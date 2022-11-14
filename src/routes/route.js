const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeController= require("../controllers/meme.js")
const weatherController= require("../controllers/weather.js")



// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/districts/:district_id/:date", CowinController.getDistrictsByDate)
router.get("/weather", weatherController.getWeather)
router.get("/allMeme", memeController.getAllMemes)
router.post("/meme", memeController.postMeme)


module.exports = router;