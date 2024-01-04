const express = require("express")
const router = express.Router()
const Workout = require("../models/workoutModel")

router.get("/", (req,res) =>{
  res.status(200).json({mssg: "get all the workouts."})
})

router.get("/:id", (req,res) =>{
  res.status(200).json({mssg: "get a single workout."})
})

router.post("/", async (req,res) =>{
  const {title,reps,load} = req.body
  try {
    const workout = await Workout.create({title,reps,load})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

router.patch("/", (req,res) =>{
  res.status(200).json({mssg: "update a single workout."})
})

router.delete("/", (req,res) =>{
  res.status(200).json({mssg: "delete a single workout."})
})

module.exports = router