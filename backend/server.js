require("dotenv").config()
const express = require("express")
const app = express()
const workoutsRoutes = require("./routes/workouts")

// middleware
app.use( (req,res,next) => {
  console.log(req.method, req.path)
  next()
})
app.use(express.json())

//routes
app.use("/api/workouts", workoutsRoutes)


// listening for request
app.listen(process.env.PORT_SERVER, () => {
 console.log("Listening on port:",process.env.PORT_SERVER); 
})