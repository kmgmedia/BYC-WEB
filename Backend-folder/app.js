const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const config = require('config');



const mongoose = require("mongoose");



mongoose
  .connect('mongodb://127.0.0.1:27017/byc-web')
  .then(() => console.log("connected to mongoDB..."))
  .catch((err) => console.log("could not connect to mongoDB...", err));


  // parse requests of content type - application/x-www-form-urlencoded




const port = process.env.PORT ||3000;

app.listen(port, () => {
  console.log(`listening on port ${port}....`);
});