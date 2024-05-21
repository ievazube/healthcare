const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('c:/Users/Ieva/healthcare-system//models/User'); // Adjust the path based on your project structure

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/healthcare', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Registration route
app.post('http://localhost:3001/register', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });

    try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error registering user', error: err });
    }
});

// Login route
app.post('http://localhost:3001/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    return res.status(200).json({ message: 'Login successful', user });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
