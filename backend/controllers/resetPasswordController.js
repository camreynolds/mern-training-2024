require("dotenv").config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")
const mongoose = require("mongoose")
const validator = require("validator")

const resetPasswordController = async (req,res) =>{
  const {_id,token} = req.params
  const {password} = req.body

  console.log(_id)
  console.log(token)
  console.log(password)

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(400).json({error: "this is not a valid id."})
  }

  if(!password){
    return res.status(400).json({error: "all the fields must be fill in."})
  }

  if(!validator.isStrongPassword(password)){
    return res.status(400).json({error: "you must use a strong password."})
  }

  const exist = await User.findById({_id})
  
  if(!exist){
    return res.status(400).json({error: "this user doesn't exist"})
  }

  const match = jwt.verify(token,process.env.SECRET)

  if(!match){
    return res.status(400).json({error: "invalid token."})
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password,salt)
  const user = await User.findByIdAndUpdate({_id},{password: hash})

  if(!user){
    return res.status(400).json({error: "password update failed."})
  }

  res.status(200).json(user)
} 

module.exports = resetPasswordController