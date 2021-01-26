const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();

app.use(cors());

require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

require('./server/routes/product.routes')(app);





app.listen(port, () => console.log(`Listening on port ${port}`));