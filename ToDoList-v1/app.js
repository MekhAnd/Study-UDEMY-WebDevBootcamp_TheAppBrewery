const express = require("express");
const bodyPars = require("body-parser");

const app = express();
let points =[];
let workPoint = [];

app.use(bodyPars.urlencoded({extended:true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/", function(req,res){
  let today = new Date();
  let options = {weekday: 'long', day:"numeric", month: "long"}
  let day = today.toLocaleDateString('UA', options)


res.render("list",{listTitle: day, newListItem: points});
  
})

app.get("/work",(req,res)=>{
  res.render("list", {listTitle: "Work List", newListItem: workPoint});
})

// app.post("/work", (req,res)=>{
//   let workItem = req.body.nextInList;
  
 
// })
app.get("/about",(req,res)=>{
  res.render("about");
})

app.post("/",(req,res)=>{
  
  let nextPoint = req.body.nextInList;
  if(req.body.list === "Work List"){
    workPoint.push(nextPoint);
    res.redirect("/work")
  } else{
    points.push(nextPoint);
    res.redirect("/");
  }
   
    
})

app.listen(3000, function(){
    console.log("Server started on port 3000")
})