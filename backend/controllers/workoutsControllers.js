const Workout = require("../models/workoutModel")

const getAllWorkouts = (req,res) =>{
  res.status(200).json({mssg: "get all the workouts."})
}

const getSingleWorkout = (req,res) =>{
  res.status(200).json({mssg: "get a single workout."})
}

const createSingleWorkout = async (req,res) =>{
  const {title,load,reps} = req.body
  const emptyFields = []

  if(!title){
    emptyFields.push("title")
  }

  if(!load){
    emptyFields.push("load")
  }

  if(!reps){
    emptyFields.push("reps")
  }

  if(emptyFields.length > 0){
    return res.status(400).json({error: "all the fields must be fill in.", emptyFields})
  }

  try {
    const workout = await Workout.create({title,load,reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: "couldn't create a workout."})
  }
}

const updateSingleWorkout = (req,res) =>{
  res.status(200).json({mssg: "update a single workout."})
}

const deleteSingleWorkout = (req,res) =>{
  res.status(200).json({mssg: "delete a single workout."})
}

module.exports = {getAllWorkouts,getSingleWorkout,createSingleWorkout,updateSingleWorkout,deleteSingleWorkout}