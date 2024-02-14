require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")

//* Routes
const workoutRoutes = require("./routes/workoutRoutes")

//middleware
app.use( (req,res,next) =>{
  console.log(req.method, req.path)
  next()
})
app.use(express.json())
app.use("/api/workouts", workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () =>{
      console.log("server & database listening on port:", process.env.PORT);
    })
  )
  .catch(error =>{
    console.log(error)
  }) 