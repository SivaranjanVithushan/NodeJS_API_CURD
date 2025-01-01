const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server startup failed:', error.message);
    }
};

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js API');
});
app.use("/api/products", require("./routes/product.route.js"));

startServer();




