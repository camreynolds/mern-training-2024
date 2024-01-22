require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const workoutsRoutes = require("./routes/workoutsRoutes")

app.use(express.json())
app.use( (req,res,next) =>{
  console.log(req.path, req.method)
  next()
})
app.use("/api/workouts", workoutsRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () =>{
      console.log("server & database connected to port:",process.env.PORT);
    })
  )
  .catch(error =>{
    console.log(error)
  })