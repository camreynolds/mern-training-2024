const express = require("express")
const workoutsRoutes = express.Router()
const { getAllWorkouts,
        getSingleWorkout,
        createSingleWorkout,
        updateSingleWorkout,
        deleteSingleWorkout} = require("../controllers/workoutsControllers")

workoutsRoutes.get("/", getAllWorkouts)
workoutsRoutes.get("/:_id", getSingleWorkout)
workoutsRoutes.post("/", createSingleWorkout)
workoutsRoutes.patch("/:_id", updateSingleWorkout)
workoutsRoutes.delete("/:_id", deleteSingleWorkout)

module.exports = workoutsRoutes