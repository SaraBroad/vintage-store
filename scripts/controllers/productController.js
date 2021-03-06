const db = require("../models")


module.exports = function(app) {

app.get("/api/products", function (req, res) {

    db.Product.findAll({}).then(function (dbProducts) {
      
        res.json(dbProducts);
    })
    .catch( err => res.json(err) );
})


app.get("/api/products/:id", function (req, res) {
    db.Product.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (dbProduct) {
            res.json(dbProduct);
        });
});


app.get("/api/products/update/:id", function (req, res) {
    db.Product.update(req.body, {
            where: {
                id: req.body.id
            }
        })
        .then(function (dbProduct) {
            res.json(dbProduct);
        });
});


}