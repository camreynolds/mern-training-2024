const express = require("express")
const resetPasswordRouter = express.Router()
const resetPasswordController = require("../controllers/resetPasswordController")

resetPasswordRouter.post("/:_id/:token", resetPasswordController)

module.exports = resetPasswordRouter