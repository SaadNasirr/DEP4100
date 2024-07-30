const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Create a new product
router.post('/', async (req, res) => {
  const { name, price, description, image } = req.body;
  const product = new Product({ name, price, description, image });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

module.exports = router;
