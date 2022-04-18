const express = require("express");
const bodyParser = require("body-parser");
// bodyPar grants us access to html file in route by req.body

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
// bodyParser.urlencoded grabs data that comes from html form data
// extended:true allows post for nested object
app.get("/", function(req, res){
    // _dirname gives the current path
    res.sendFile(__dirname + "/index.html");
});



app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
// req.body.num1 returns a string so Number() changes it to a number
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});

