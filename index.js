const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

var username = "saranya@gmail.com"
var password = 1234

app.use(express.json())   //middleware for post method

app.use(express.urlencoded({extended:true}))  //middleware for post request, it is used for <form> action

//app.get("/login", function(req,res){
app.post("/login", function(req,res){
    console.log(req.body.username)
    //if(req.query.username === username && req.query.password == password)
     if(req.body.username === username && req.body.password == password)
    {
        res.send(true)
    }
    else{
        res.send(false)

    }
})

app.listen(3000,function(){
    console.log("Server Started...")
})