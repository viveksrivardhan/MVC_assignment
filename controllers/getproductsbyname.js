const {ProductsModel} = require("../models/UserSchema");
function getproductsbyname(req, res) {
    ProductsModel.find({ name: req.params.name }, { _id: 0, __v: 0 }, function (err, result) {
        if (err) {
            console.log("No data found");
        } else {
            if (result.length <= 0) {
                res.status(404).send("No Products found in the mentioned name");
            } else {
                res.send(result);
            }
        }
    });
}

module.exports = getproductsbyname;