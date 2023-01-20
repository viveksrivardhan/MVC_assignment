const {ProductsModel} = require("../models/UserSchema");
function getproduct(req,res){
    ProductsModel.find({}, { __v: 0 }, function (err, result) {
        if (err) {
            console.log("No data found");
        } else {
            if (result.length <= 0) {
                res.status(404).send("No Products found");
            } else {
                res.send(result);
            }
        }
    });
}

module.exports = getproduct;