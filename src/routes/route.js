const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeController= require("../controllers/meme.js")
const weatherController= require("../controllers/weather.js")






router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/districts/:district_id/:date", CowinController.getDistrictsByDate)
router.get("/weather", weatherController.getWeather)
router.post("/meme", memeController.postMeme)
//-------------------------weather----------------

module.exports = router;