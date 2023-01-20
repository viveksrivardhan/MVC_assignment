const express = require("express");
const getproductsbynameroute = express.Router();
const getproductsbyname = require("../controllers/getproductsbyname");
getproductsbynameroute.get("/name/:name",getproductsbyname);
module.exports=getproductsbynameroute;