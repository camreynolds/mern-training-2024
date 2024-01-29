require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const workoutsRouter = require("./routers/workoutsRouter")
const usersRouter = require("./routers/usersRouter")

app.use( (req,res,next) =>{
  console.log(req.path, req.method)
  next()
})
app.use(express.json())
app.use("/api/workouts",workoutsRouter)
app.use("/api/users", usersRouter)

mongoose.connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, _ =>{
      console.log("server & database connected to port:", process.env.PORT)
    })
  ).catch(error =>{
    console.log(error)
  })