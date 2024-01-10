const express = require("express")
const router = express.Router()
const { getAllWorkouts,
        getSingleWorkout,
        createWorkout,
        updateWorkout,
        deleteWorkout} = require("../controllers/workoutControllers")
const requireAuth = require("../middleware/requireAuth")

router.use(requireAuth)

router.get("/", getAllWorkouts)

router.get("/:id", getSingleWorkout)

router.post("/", createWorkout)

router.patch("/:id", updateWorkout)

router.delete("/:id", deleteWorkout)

module.exports = router