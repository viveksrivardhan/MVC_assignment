const {ProductsModel} = require("../models/UserSchema");
function addpro(req,res){
    let name = req.body.name;
    let total_qnty = req.body.total_qnty;
    let Category = req.body.Category;
    let price_per_piece = req.body.price_per_piece;
    try {
        let productData = ProductsModel.validate({
            name: name,
            total_qnty: total_qnty,
            Category: Category,
            price_per_piece: price_per_piece
        });
        let product = new ProductsModel(productData);
        product.save().then(() => {
            res.send("Item added successfully");
        }).catch((err) => {
            res.send(err, "Failed to add the item");
        });
    }
    catch (err) {
        res.send(err, "Failed to add the item");
    }
}

module.exports = addpro;
