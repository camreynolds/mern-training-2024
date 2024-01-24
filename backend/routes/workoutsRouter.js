const express = require("express")
const workoutsRouter = express.Router()
const { getAllWorkouts,
        getSingleWorkout,
        createSingleWorkout,
        updateSingleWorkout,
        deleteSingleWorkout} = require("../controllers/workoutsControllers")

workoutsRouter.get("/", getAllWorkouts)
workoutsRouter.get("/:_id", getSingleWorkout)
workoutsRouter.post("/", createSingleWorkout)
workoutsRouter.patch("/:_id", updateSingleWorkout)
workoutsRouter.delete("/:_id", deleteSingleWorkout)

module.exports = workoutsRouter