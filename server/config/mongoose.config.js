const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/product_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>  console.log("You're now inside the mainframe..."))
    .catch(err => console.log("MELTDOWN! MELTDOWN! MELTDOWN!",err));