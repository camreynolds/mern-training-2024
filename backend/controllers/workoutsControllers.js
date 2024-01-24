const getAllWorkouts = (req,res) =>{
  res.status(200).json({mssg: "get all the workouts."})
}

const getSingleWorkout = (req,res) =>{
  res.status(200).json({mssg: "get a single workout."})
}

const createSingleWorkout = (req,res) =>{
  res.status(200).json({mssg: "create single workout."})
}

const updateSingleWorkout = (req,res) => {
  res.status(200).json({mssg: "update singel workout."})
}

const deleteSingleWorkout = (req,res) => {
  res.status(200).json({mssg: "delete single workout"})
}

module.exports = {getAllWorkouts,getSingleWorkout,createSingleWorkout,updateSingleWorkout,deleteSingleWorkout}