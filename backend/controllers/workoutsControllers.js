const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

const getAllWorkouts = async (req,res) =>{
  // const user_id = req.user._id
  
  try{
    // const workouts = await Workout.find({user_id}).sort({createdAt: -1})
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
  }catch(error){
    res.status(400).json({error: "not such workouts."})
  }
}

const getSingleWorkout = async (req,res) =>{
  const {_id} = req.params

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(400).json({error: "this is not a valid id."})
  }

  const workout = await Workout.findById({_id})

  if(!workout){
    return res.status(400).json({error: "workout not found."})
  }

  res.status(200).json(workout)
}

const createSingleWorkout = async (req,res) =>{
  const {title,load,reps} = req.body
  const emptyFields = []
  // const user_id = req.user._id

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
    return res.status(400).json({error: "all the fields must be fill in.",emptyFields})
  }

  try{
    // const workout = await Workout.create({title,load,reps,user_id})
    const workout = await Workout.create({title,load,reps})
    res.status(200).json(workout)
  }catch(error){
    res.status(400).json({error:"workout couldn't be created."})
  }
}

const updateSingleWorkout = async (req,res) =>{
  const {_id} = req.params
  console.log({...req.body})

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(400).json({error: "this is not a valid id."})
  }

  const workout = await Workout.findByIdAndUpdate({_id},{...req.body})

  if(!workout){
    return res.status(400).json({error: "workout couldn't be updated."})
  }

  res.status(200).json(workout)
}

const deleteSingleWorkout = async (req,res) =>{
  const {_id} = req.params

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(400).json({error: "this is not a valid id."})
  }

  const workout = await Workout.findByIdAndDelete({_id})

  if(!workout){
    return res.status(400).json({error: "not such workout."})
  }

  res.status(200).json(workout)
}

module.exports = {getAllWorkouts,getSingleWorkout,createSingleWorkout,updateSingleWorkout,deleteSingleWorkout}