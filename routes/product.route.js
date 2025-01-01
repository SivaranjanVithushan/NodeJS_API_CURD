const express = require('express');
const router = express.Router();
const { getProduct, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/product.contoller.js');
const validateProduct = require('../middleware/productValidation.js');

router.get('/', getProduct);
router.get('/:id', getProductById);
router.post('/', validateProduct, createProduct);
router.put('/:id', validateProduct, updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;