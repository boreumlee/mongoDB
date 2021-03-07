const mongoose = require("mongoose");
const { connected_mongo } = require("../index");

connected_mongo;
/**
 * var DishSchema = new mongoose.Schema({
  dishName: { type: String },
  tags:     { type: Array },
  price:    { type: Number },
  intro:    { type: String },
  dishPic:  { type: String },
  index:    { type: Number },
  comment:  { type: [{
    date:     {type: Date, default: Date.now },
    userId:   {type: String },
    content:  {type: String }
  }]}
});
 */
const shopee_module = new mongoose.Schema({
  module_id: { type: Number },
  module_name: { type: String },
  items: {
    type: [
      {
        id: { type: Number },
        name: { type: String },
      },
    ],
  },
});

const shopeeModule = mongoose.model("shopee_module", shopee_module);

module.exports = { shopeeModule };
