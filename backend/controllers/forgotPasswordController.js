require("dotenv").config()
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
const validator = require("validator")
const nodemailer = require("nodemailer")

const createToken = (_id) =>{
  return jwt.sign({_id},process.env.SECRET, {expiresIn: "10m"})
} 

const forgotPasswordController = async (req,res) =>{
  const {email} = req.body

  if(!email){
    return res.status(400).json({error: "all the fields must be fill in."})
  }

  if(!validator.isEmail(email)){
    return res.status(400).json({error: "you must use a valid email."})
  }

  const user = await User.findOne({email})

  if(!user){
    return res.status(400).json({error: "this email is not in use."})
  }

  const token = createToken(user._id)
  const user_id = user._id

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_HOST,
      auth:{
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.SMTP_USERNAME,
      to: process.env.SMTP_RECIVER,
      subject: "Reset Password Link",
      text: `http://localhost:3000/reset-password/${user_id}/${token}`
    }

    transporter.sendMail(mailOptions, (error,info) =>{
      if(error){
        res.status(400).json({error: "unable to send mail."})
      }
      res.status(200).json(info.response)
    })
  } catch (error) {
    res.status(400).json({error: "unable to send mail."})
  }  
}

module.exports = forgotPasswordController