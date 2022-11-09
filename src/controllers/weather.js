let axios = require("axios")
let getWeather = async function (req, res) {
    try {
        let allWeather=[]
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for(let i=0;i<cities.length;i++){
        let city =cities[i]
        res.send({ msg: city })
        //e8c75ec1e51aa9a1df83ab908f86bc5d
       
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f196c24c18c8ced1c7a0d5e1daecd986`
        }      
        let result= await axios(options);
        res.status(500).send({ msg: result })
         allWeather.push(result)
    }
        console.log(allWeather)
        let data = allWeather
        res.status(200).send({ msg: data, status: true })
    
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather = getWeather