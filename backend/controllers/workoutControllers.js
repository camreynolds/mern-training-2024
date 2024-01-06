const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

const getAllWorkouts = async (req,res) =>{
  try {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const getSingleWorkout = async (req,res) =>{
  const {id} = req.params
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "This is not a valid workout id"})
  }

  const workout = await Workout.findById({_id:id})

  if(!workout){
    return res.status(400).json({error: "no such workout."})
  }

  res.status(200).json(workout)
}

const createWorkout = async (req,res) =>{
  const {title,reps,load} = req.body

  const emptyFields =[]

  if(!title){
    emptyFields.push("title")
  }

  if(!reps){
    emptyFields.push("reps")
  }

  if(!load){
    emptyFields.push("load")
  }

  if(emptyFields.length > 0){
    return res.status(400).json({error: "all fields must be fill in.",emptyFields})
  }

  try {
    const workout = await Workout.create({title,reps,load})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const updateWorkout = async (req,res) =>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "this is not a valid workout id."})
  }

  const workout = await Workout.findByIdAndUpdate({_id:id},{...req.body})

  if(!workout){
    return res.status(400).json({error: "not such workout."})
  }

  res.status(200).json(workout)
}

const deleteWorkout = async (req,res) =>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "this is not a valid workout id."})
  }

  const workout = await Workout.findByIdAndDelete({_id:id})

  if(!workout){
    return res.status(400).json({error: "not such workout."})
  }

  res.status(200).json(workout)
}

module.exports = {getAllWorkouts,getSingleWorkout,createWorkout,updateWorkout,deleteWorkout}