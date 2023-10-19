const mongoose = require("mongoose");
const ProductScema = mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("product", ProductScema);

module.exports = { ProductModel };
