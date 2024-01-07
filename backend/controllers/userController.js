const User = require("../models/userModel")

const login = async (req,res) =>{
  const {email,password} = req.body

  if(!email || !password){
    return res.status(400).json({error: "all the fileds must be fill in."})
  }

 try{
  const user = await User.create({email,password})
  res.status(200).json(user)
 }catch(error){
  res.status(400).json({error:"user couldn't be logged in."})
 }
}

const signup = async (req,res) =>{
  const {email,password} = req.body

  if(!email || !password){
    return res.status(400).json({errro: "all the fields must be fill in."})
  }

  try{
    const user = await User.create({email,password})
    res.status(200).json(user)
  }catch(error){
    res.status(400).json({error: "user couldn't be signed in."})
  }
}

module.exports = {login,signup}