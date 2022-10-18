const url = "https://www.google .com"

let printSomthing = function(){

    console.log("Request detail are - a, b, c")
}
//--to make this public  ---have fix sintax module.export.myurl= name which module u want to public ---in outer world url known as my urll
//--syntax to make public
module.exports.myUrl = url;
//----function becomr public ny my function name
module.exports.myFunction = printSomthing;




