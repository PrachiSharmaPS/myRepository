let axios = require("axios")
let getWeather = async function (req, res) {
    try {
        let arr=[]
        let city =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for(let i of city){
      
            let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${i}&appid=b82f65398054ac987e7226a013815c2f`
        }           
        let result= await axios(options);
        let temprature=result.data.main.temp
        let obj={city: i,temp:temprature}
         arr.push(obj)
        }
        let sortedCities = arr.sort(function(x,y){return x.temp-y.temp
    });
        
        res.status(200).send(sortedCities)
    
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather = getWeather