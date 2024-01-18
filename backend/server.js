require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const workoutRoutes = require("./routes/workoutRoutes")
const usersRoutes = require("./routes/usersRoutes")

app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})

app.use("/api/workouts", workoutRoutes)
app.use("/api/users", usersRoutes)

mongoose.connect(process.env.MONGO_DB)
	.then( () => {
		app.listen(process.env.PORT_SERVER, () =>{
				console.log("conneted to server & database listening on port:",process.env.PORT_SERVER);
		})
	})
	.catch(error =>{
		console.log(error);
	})