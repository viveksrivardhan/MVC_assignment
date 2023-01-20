const express = require("express");
const getproductsbycategoryroute = express.Router();
const getproductsbycategory = require("../controllers/getproductsbycategory");
getproductsbycategoryroute.get("/category/:category",getproductsbycategory);
module.exports=getproductsbycategoryroute;