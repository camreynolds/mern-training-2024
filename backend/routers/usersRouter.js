const express = require("express")
const usersRouter = express.Router()
const {userSignup, userLogin} = require("../controllers/usersControllers")

usersRouter.post("/signup", userSignup)
usersRouter.post("/login", userLogin)

module.exports = usersRouter