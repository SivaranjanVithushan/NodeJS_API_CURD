const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
    },
    quantity: {
        type: Number,
        required: [true, "Product quantity is required"],
        default: 0,
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        default: 0,
    },
    image: {
        type: String,
        require: false,
    },
},
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;  // Export the model for use in other files