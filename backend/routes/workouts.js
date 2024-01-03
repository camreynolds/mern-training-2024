const express = require("express")
const router = express.Router()

router.get("/", (req,res) =>{
  res.status(200).json({mssg: "get all the workouts."})
})

router.get("/:id", (req,res) =>{
  res.status(200).json({mssg: "get a single workout."})
})

router.post("/", (req,res) =>{
  res.status(200).json({mssg: "create a single workout."})
})

router.patch("/", (req,res) =>{
  res.status(200).json({mssg: "update a single workout."})
})

router.delete("/", (req,res) =>{
  res.status(200).json({mssg: "delete a single workout."})
})

module.exports = router