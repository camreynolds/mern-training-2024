require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})

app.get("/", (req,res) =>{
	res.status(200).json("Welcome to the app.")
})

mongoose.connect(process.env.MONGO_DB)
	.then( () => {
		app.listen(process.env.PORT, () =>{
				console.log("conneted to server & database listening on port:",process.env.PORT);
		})
	})
	.catch(error =>{
		console.log(error);
	})