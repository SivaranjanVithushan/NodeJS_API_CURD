const validateProduct = (req, res, next) => {
    const { name, quantity, price } = req.body;

    if (!name || !quantity || !price) {
        return res.status(400).json({
            status: 'error',
            message: 'Name, quantity, and price are required'
        });
    }

    if (typeof price !== 'number' || price <= 0) {
        return res.status(400).json({
            status: 'error',
            message: 'Price must be a positive number'
        });
    }

    if (typeof quantity !== 'number' || quantity < 0) {
        return res.status(400).json({
            status: 'error',
            message: 'Quantity must be a non-negative number'
        });
    }

    next();
};

module.exports = validateProduct;