require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const usersRouter = require("./routes/usersRouter")
const workoutsRouter = require("./routes/workoutsRouter")


app.use(express.json())
app.use( (req,res,next) =>{
  console.log(req.path, req.method)
  next()
})
app.use("/api/users", usersRouter)
app.use("/api/workouts", workoutsRouter)

mongoose.connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () =>{
      console.log("server & database connected to port:",process.env.PORT);
    })
  )
  .catch(error =>{
    console.log(error)
  })