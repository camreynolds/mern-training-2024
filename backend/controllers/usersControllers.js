require("dotenv").config()
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const createToken = (id) =>{
  return jwt.sign({id}, process.env.SECRET)
}

const usersLogin = async (req,res) =>{
  const {email,password} = req.body

  try{
    const user = await User.login(email,password)
    const token = createToken(user._id)
    res.status(200).json({email,token})
  }catch(error){
    res.status(400).json({error: error.message})
  }
}

const usersSignup = async (req,res) =>{
  const {email,password} = req.body

  try{
    const user = await User.signup(email,password)
    const token = createToken(user._id)
    res.status(200).json({email,token})
  }catch(error){
    res.status(400).json({error: error.message})
  }
}

module.exports = {usersLogin,usersSignup}