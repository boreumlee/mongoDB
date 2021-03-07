const mongoose = require("mongoose");
const { connected_mongo } = require("../index");

connected_mongo;

const shopee_test = new mongoose.Schema({
  module_id: Number,
  module_name: String,
});

const testModel = mongoose.model("shopee_test", shopee_test, "test");

const api_test_module = new mongoose.Schema({
  id: Number,
  name: String,
  module_id: Number,
});

const api_value = mongoose.model(
  "api_test_module",
  api_test_module,
  "api_values"
);

module.exports = { testModel, api_value };
