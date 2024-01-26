const Workout = require("../model/workoutModel")
const mongoose = require("mongoose")

const getAllWorkouts = async (req,res) =>{
  const user_id = req.user._id

  try{
    const workouts = await Workout.find({user_id}).sort({createdAt: -1})
    res.status(200).json(workouts)
  }catch(error){
    res.status(400).json({error: "not such workouts"})
  }
}

const getSingleWorkout = async (req,res) =>{
  const {_id} = req.params

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(400).json({error: "this is not a valid id."})
  }

  const workout = await Workout.findById({_id})

  if(!workout){
    return res.status(400).json({error: "not such workout"})
  }

  res.status(200).json(workout)
}

const createSingleWorkout = async (req,res) =>{
  const {title,load,reps} = req.body
  const isEmpty = []
  const user_id = req.user._id

  if(!title){
    isEmpty.push("title")
  }

  if(!load){
    isEmpty.push("load")
  }

  if(!reps){
    isEmpty.push("reps")
  }

  if(isEmpty.length > 0){
    return res.status(400).json({error: "all the fields must be fill in.",isEmpty})
  }

  try{
    const workout = await Workout.create({title,load,reps,user_id})
    res.status(200).json(workout)
  }catch(error){
    res.status(400).json({error: error.message})
  }
}

const updateSingleWorkout = async (req,res) => {
  const {_id} = req.params

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(400).json({error: "this is not a valid id."})
  }

  const workout = await Workout.findByIdAndUpdate({_id},{...req.body})

  if(!workout){
    return res.status(400).json({error: "not such workout."})
  }

  res.status(200).json(workout)
}

const deleteSingleWorkout = async (req,res) => {
  const {_id} = req.params

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(400).json({errro: "this is not a vaid id."})
  }

  const workout = await Workout.findByIdAndDelete({_id})

  if(!workout){
    return res.status(400).json({error: "not such workout."})
  }

  res.status(200).json(workout)
}

module.exports = {getAllWorkouts,getSingleWorkout,createSingleWorkout,updateSingleWorkout,deleteSingleWorkout}