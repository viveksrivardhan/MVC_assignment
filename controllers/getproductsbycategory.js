const {ProductsModel} = require("../models/UserSchema");
function getproducts(req, res) {
    ProductsModel.find({ category: req.params.category }, { _id: 0, __v: 0 }, function (err, result) {
        if (err) {
            console.log("No data found");
        } else {
            if (result.length <= 0) {
                res.status(404).send("No Products found in the mentioned category");
            } else {
                res.send(result);
            }
        }
    });
}

module.exports = getproducts;