const express = require("express");

const getproductsbyidrouter = express.Router();

const getproductsbyid = require('../controllers/getproductbyid');

getproductsbyidrouter.get("/id/:id", getproductsbyid);

module.exports = getproductsbyidrouter;