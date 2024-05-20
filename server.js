const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User'); // Adjust the path based on your project structure

const authRoutes = require('./routes/authRoutes');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/healthcare', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    return res.status(200).json({ message: 'Login successful', user });
});

// Define Routes
app.use('/api/auth', authRoutes);

// Example route
app.get('/', (req, res) => {
    res.send('Healthcare system API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
