const express = require('express');
const { fetchAndSaveProducts, getAllProducts } = require('../controllers/productController');
const router = express.Router();

// Route to fetch and save products from Fake Store API
router.get('/fetch', fetchAndSaveProducts);

// Route to get all products from the database
router.get('/', getAllProducts);

module.exports = router;
