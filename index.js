const mongoose = require("mongoose");
require("dotenv").config();

const connected_mongo = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected... 되었음"))
  .catch((err) => console.log(err));

module.exports = { connected_mongo };
