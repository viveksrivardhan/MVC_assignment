const mongoose = require("mongoose");
const Joi = require('joi');
const Schema = mongoose.Schema;

const users = new Schema({
    username: Joi.string().alphanum().min(5).max(40).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

const products = new Schema({
    name: Joi.string().min(5).max(30).required(),
    total_qnty: Joi.number().min(1).max(100),
    Category:Joi.string().min(2).max(30).required(),
    price_per_piece:Joi.number().min(1).max(100),
})

const UserModel = mongoose.model("User",users);
const ProductsModel = mongoose.model("sample_products",products);

module.exports={
    UserModel,ProductsModel
};