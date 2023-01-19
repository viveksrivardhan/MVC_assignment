const express = require("express");

//Inbuilt method used to make express routes
const signupRouter = express.Router();

// importing controller
const RegisterUser = require("../controllers/RegisterUser");

signupRouter.post("/register", RegisterUser);
module.exports = signupRouter;