const router = require('express').Router();
const Product = require("../models/Product");

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  
  try {
    let products = await Product.find()

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create
router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;