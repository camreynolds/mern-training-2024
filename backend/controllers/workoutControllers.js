const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

const getAllWorkouts = async (req,res) =>{
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({error: "not such workout."})
    }
}

const getSingleWorkout = async (req,res) =>{
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "this is not a valid id."})
    }
    
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(400).json({error: "workout doesn't exist"})
    }

    res.status(200).json(workout)
}

const createSingleWorkout = async (req,res) =>{
    const {title,load,reps} = req.body
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: "workout couldn't be created."})
    }
}

const updateSingleWorkout = async (req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "this is not a valid id."})
    }

    const workout = await Workout.findByIdAndUpdate({_id:id},{...req.body})

    if(!workout){
        return res.status(400).json({error: "not such a workout."})
    }

    res.status(200).json(workout)
}

const deleteSingleWorkout = async (req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "this is not a valid id."})
    }

    const workout = await Workout.findByIdAndDelete({_id:id})

    if(!workout){
        return res.status(400).json({error: "not such a workout."})
    }

    res.status(200).json(workout)
}

module.exports = {getAllWorkouts,getSingleWorkout,createSingleWorkout,updateSingleWorkout,deleteSingleWorkout}