const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
    username: String,
    email: String,
    password: String
});

const products = new Schema({
    name: String,
    total_qnty: Number,
    Category:String,
    price_per_piece:Number
})

const UserModel = mongoose.model("User",users);
const ProductsModel = mongoose.model("sample_products",products);

module.exports={
    UserModel,ProductsModel
};