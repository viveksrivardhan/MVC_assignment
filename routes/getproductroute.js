const express = require("express");

const getproductrouter = express.Router();

const getproduct = require('../controllers/getproduct');

getproductrouter.get("/products", getproduct);

module.exports = getproductrouter;