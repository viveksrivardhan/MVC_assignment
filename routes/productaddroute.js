const express = require("express");
const productaddroute = express.Router();
const addpro = require("../controllers/productadd");
productaddroute.post("/new",addpro);
module.exports = productaddroute;