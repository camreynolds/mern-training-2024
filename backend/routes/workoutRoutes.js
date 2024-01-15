const express = require("express")
const { getAllWorkouts,
        getSingleWorkout,
        createSingleWorkout,
        updateSingleWorkout,
        deleteSingleWorkout } = require("../controllers/workoutControllers")
const route = express.Router()

route.get("/", getAllWorkouts)
route.get("/:id", getSingleWorkout)
route.post("/", createSingleWorkout)
route.patch("/:id", updateSingleWorkout)
route.delete("/:id", deleteSingleWorkout)

module.exports = route