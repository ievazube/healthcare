const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/healthcare"; // Replace with your MongoDB URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = db;
