const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/foodSchema', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});


// Define Schema and Models
const foodSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String,
});

const Food = mongoose.model('Food', foodSchema);

// Routes
app.get('/api/foods', async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (error) {
        console.error('Error fetching foods:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/api/foods', async (req, res) => {
    try {
        const newFood = await Food.create(req.body);
        res.status(201).json(newFood);
    } catch (error) {
        console.error('Error creating food:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});