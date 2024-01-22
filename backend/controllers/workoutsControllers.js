const Workout = require("../model/workoutModel")
const mongoose = require("mongoose")

const getAllWorkouts = async (req,res) =>{
  try{
    const workout = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
  }catch(error){
    res.status(400).json({error: "couldn't find any workout."})
  }
}

const getSingleWorkout = async (req,res) =>{
  const {_id} = req.params

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(400).json({error: "this is not a valid id."})
  }

  const workout = await Workout.findById({_id})

  if(!workout){
    return res.status(400).json({error: "not such workout."})
  }

  res.status(200).json(workout)
}

const createSingleWorkout = async (req,res) =>{
  const {title,load,reps} = req.body
  const isEmpty = []

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
    return res.status(400).json({error: "all the field must be fill in.", isEmpty})
  }

  try{
    const workout = await Workout.create({title,load,reps})
    res.status(200).json(workout)
  }catch(error){
    res.status(400).json({error: "workout couldn't be created."})
  }
}

const updateSingleWorkout = async (req,res) =>{
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