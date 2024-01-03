require("dotenv").config()
const express = require("express")
const app = express()

// middleware
app.use( (req,res,next) => {
  console.log(req.path, req.method)
  next()
})

//endpoint
app.get( "/", (req,res) => {
  res.status(200).json({mssg: "Welcome to the app"})
})



// listening for request
app.listen(4000, () => {
 console.log("Listening on port 4000"); 
})