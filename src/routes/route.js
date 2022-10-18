const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
//---route is --/test-me---the path and rout hndlear is ---functionto res---()
router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params

router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})
//===Create an API for GET /movies that returns
router.get('/student-details/:x',function(req,res){
})

//----assignment---====================
const movieArr = ["Rang-de-basanti", 'The-shining', 'Lord-of-the-rings', 'Batman-begins']

router.get('/movie',function(req,res){
    res.send(movieArr[0])
})

//--path params--2nd router.get('/student-details/:x',function(req,res){
router.get('/movie/:indexNumber',function(req,res){
    const index= req.params.indexNumber
    console.log(movieArr[index])
    res.send(movieArr[index])
})

//----Handle a scenario in problem 2 ----
router.get('/movies/:indexNumber',function(req,res){
    const index= req.params.indexNumber
    if(index>=0 && index < movieArr.length){
    console.log(movieArr[index])
    res.send(movieArr[index])
}else {
    res.send("invalid")
}
})
//-----in obj form---
const filmArr = [ {
    "id": 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]
//--all films in object form
   router.get('/allfilm',function(req,res){
    //const id= req.params.idNumber
   // const film= filmArr.find(film =>film.id==id)
    console.log(filmArr)
    res.send(filmArr)
})

   router.get('/film/:idNumber',function(req,res){
    const id= req.params.idNumber
    const film= filmArr.find(film =>film.id==id)

    if(film){
    console.log(film)
    res.send(film)}
    else {
        res.send("no movie ")
    }
   })
module.exports = router;

