require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const workoutsRoutes = require("./routes/workouts")
const userRoutes = require("./routes/user")

// middleware
app.use( (req,res,next) => {
  console.log(req.method, req.path)
  next()
})
app.use(express.json())

//routes
app.use("/api/workouts", workoutsRoutes)
app.use("/api/users", userRoutes)


//connection to the database
mongoose.connect(process.env.DATABASE_URI)
  .then( () => {
    // listening for request
    app.listen(process.env.PORT_SERVER, () => {
      console.log("Connecting to DB & listening on port:",process.env.PORT_SERVER); 
     })
  })
  .catch( error => {
    console.log(error);
  })

