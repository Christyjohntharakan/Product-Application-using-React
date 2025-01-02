const Product = require('../models/Product');
const axios = require('axios');

// Fetch products from Fake Store API and save to MongoDB
const fetchAndSaveProducts = async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;

    // Delete existing products and insert new ones from the API
    await Product.deleteMany();
    await Product.insertMany(products);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

// Get all products from MongoDB
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

module.exports = { fetchAndSaveProducts, getAllProducts };
