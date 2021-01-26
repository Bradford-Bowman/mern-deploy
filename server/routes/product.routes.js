const ProductController = require("../controllers/product.controllers");

module.exports = app => {
    //Get ALL
    app.get("/api/product", ProductController.findAll);
    //Get ONE
    app.get("/api/product/:_id", ProductController.findOneThing);
    //Create ONE
    app.post("/api/product/new", ProductController.createOne);
    //Update ONE
    app.put("/api/product/update/:_id", ProductController.updateOneThing);
    //Delete ONE
    app.delete("/api/product/delete/:_id", ProductController.deleteOneThing);
}