const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vithukuddy04:QCJLmby4h76fe5rk@backenddb.zh5is.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB').then(
            () => {
                console.log('Database connected successfully');
            }
        );

    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;