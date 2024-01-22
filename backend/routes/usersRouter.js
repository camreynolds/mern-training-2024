const express = require("express")
const usersRouter = express.Router()
const {userLogin,userSignup} = require("../controllers/usersControllers")

usersRouter.post("/login", userLogin)
usersRouter.post("/signup", userSignup)

module.exports = usersRouter