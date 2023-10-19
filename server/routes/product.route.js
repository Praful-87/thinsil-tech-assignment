const { Router } = require("express");
const { ProductModel } = require("../model/products.model");

const productRouter = Router();

productRouter.post("/add", async (req, res) => {
  try {
    await ProductModel.create(req.body);
    res.status(200).send("product addded");
  } catch (error) {
    console.log(error.message);
    res.status(400).send("product route something wrong");
  }
});

module.exports = productRouter;
