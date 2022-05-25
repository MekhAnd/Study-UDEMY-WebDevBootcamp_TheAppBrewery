const express = require("express");
const bpm = require("body-parser");
const req = require("express/lib/request");


let app = express();
app.use(bpm.urlencoded({extended:true}));

app.get("/", function(request, response){
    response.sendFile(__dirname+"/calculator.html");
})

app.post("/",(request, response)=>{
    let n1 = Number(request.body.n1);
    let n2 = Number(request.body.n2);
    let res = n1+n2;
    
    response.send("Thank you for your communications! " + res);
})

app.get("/bmicalculator", function(request, response){
    response.sendFile(__dirname+"/bmicalculator.html");
})

app.post("/bmicalculator", function(request,response){
    let weight = Number(request.body.weight);
    let height = Number(request.body.height);

    let bmiIndex = weight/ (height*height);

    response.send(`<p>Your BMI is ${bmiIndex}</p>`)
})

app.listen(3000, function(){
    console.log("Server Ok!");
})