require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const workoutRoutes = require("./routes/workoutRoutes")

app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})

app.use("/api/workouts", workoutRoutes)

mongoose.connect(process.env.MONGO_DB)
	.then( () => {
		app.listen(process.env.PORT, () =>{
				console.log("conneted to server & database listening on port:",process.env.PORT);
		})
	})
	.catch(error =>{
		console.log(error);
	})