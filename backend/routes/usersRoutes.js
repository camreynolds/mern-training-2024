const express = require("express")
const usersRoutes = express.Router()
const {usersLogin,usersSignup} = require("../controllers/usersControllers")

usersRoutes.post("/login", usersLogin)
usersRoutes.post("/signup", usersSignup)

module.exports = usersRoutes