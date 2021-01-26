const Product = require("../models/product.models");

//Get ALL of our stuff
module.exports.findAll = (req, res) => {
    Product.find()
    .then(allProduct => res.json({Products: allProduct}))
    .catch(err => res.json({message: "Something went wrong when getting all Products!", error: err}))
}

//Get ONE thing
module.exports.findOneThing = (req, res) => {
    Product.findOne({_id: req.params._id})
    .then(oneProduct => res.json({Product: oneProduct}))
    .catch(err => res.json({message: "Something went wrong when getting one Product!", error: err}))
}

//Add to DB
module.exports.createOne = (req, res) => {
    Product.create(req.body)
    .then(addProduct => res.json({Product: addProduct}))
    .catch(err => res.json({message: "Something went wrong when adding Product to DB!", error: err}))
}

//Updating ONE thing
module.exports.updateOneThing = (req, res) => {
    Product.updateOne({_id: req.params._id}, req.body, {runValidators: true})
    .then(oneProduct => res.json({Product: oneProduct}))
    .catch(err => res.json({message: "Something went wrong when updating one Product!", error: err}))
}

//Deleting ONE thing
module.exports.deleteOneThing = (req, res) => {
    Product.deleteOne()
    .then(res.json({message: "Item deleted!"}))
    .catch(err => res.json({message: "Something went wrong when deleting one Product!", error: err}))
}