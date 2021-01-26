const mongoose = require("mongoose");

// Basic setup of the Mongoose Schema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true,"You need a Pet Name"],
        minlength: [3,"Pet name has to be at least 3 characters"],
        match: [false,"Pet name is already taken"],
    },
    type: {
        type: String,
        required:[true,"You need a Pet Type"],
        minlength: [3,"Pet Type has to be at least 3characters"]
    },
    description: {
        type: String,
        required: [true, "Must have Pet Description"],
        minlength: [3,"Pet Description has to be at least 3 characters"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },
}, {timestamps:true})

// This is how we register our schema.
const Product = mongoose.model("Product", ProductSchema);

// Finally we export it out of the file.
module.exports = Product;