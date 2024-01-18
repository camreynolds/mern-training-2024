const User = require("../models/userModel")

const usersLogin = async (req,res) =>{
  const {email,password} = req.body

  try{
    const user = await User.login(email,password)
    res.status(200).json(user)
  }catch(error){
    res.status(400).json({error: error.message})
  }
}

const usersSignup = async (req,res) =>{
  const {email,password} = req.body

  try{
    const user = await User.signup(email,password)
    res.status(200).json(user)
  }catch(error){
    res.status(400).json({error: error.message})
  }
}

module.exports = {usersLogin,usersSignup}