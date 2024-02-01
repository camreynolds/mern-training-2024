const express = require("express")
const forgotPasswordRouter = express.Router()
const forgotPasswordController = require("../controllers/forgotPasswordController")

forgotPasswordRouter.post("/", forgotPasswordController)

module.exports = forgotPasswordRouter