const express = require("express")
const usersRoutes = express.Router()
const {userSignup,userLogin} = require("../controllers/usersControllers")

usersRoutes.post("/signup", userSignup)
usersRoutes.post("/login", userLogin)

module.exports = usersRoutes