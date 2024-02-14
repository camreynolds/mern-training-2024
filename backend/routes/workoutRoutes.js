const express = require("express")
const workoutRoutes = express.Router()

//* controllers
const { getAllWorkouts,
        getSingleWorkout,
        createSingleWorkout,
        updateSingleWorkout,
        deleteSingleWorkout} = require("../controllers/workoutsControllers")

workoutRoutes.get("/", getAllWorkouts)
workoutRoutes.get("/:_id", getSingleWorkout)
workoutRoutes.post("/", createSingleWorkout)
workoutRoutes.patch("/:_id", updateSingleWorkout)
workoutRoutes.delete("/:_id", deleteSingleWorkout)

module.exports = workoutRoutes