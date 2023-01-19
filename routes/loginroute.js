const express = require("express");

//Inbuilt method used to make express routes
const LoginRouter = express.Router();

// importing controller
const LoginUser = require("../controllers/LoginUser");

LoginRouter.post("/user", LoginUser);
module.exports = LoginRouter;