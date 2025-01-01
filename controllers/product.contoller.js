const Product = require('../models/product.model.js');

const getProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({
            status: 'success',
            count: products.length,
            data: products
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error fetching products',
            error: error.message
        });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                status: 'error',
                message: 'Product not found'
            });
        }
        return res.status(200).json({
            status: 'success',
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error fetching product',
            error: error.message
        });
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).json({
            status: 'success',
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error creating product',
            error: error.message
        });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({
                status: 'error',
                message: 'Product not found'
            });
        }
        return res.status(200).json({
            status: 'success',
            data: product
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error updating product',
            error: error.message
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({
                status: 'error',
                message: 'Product not found'
            });
        }
        return res.status(200).json({
            status: 'success',
            message: 'Product deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error deleting product',
            error: error.message
        });
    }
}

module.exports = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
