const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Import the User model
const cors = require('cors'); // To allow cross-origin requests
const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies
require('dotenv').config(); // To use environment variables

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes

// Create (POST)
app.post('/api/register', async (req, res) => {
    const { firstName, lastName, rollNo, password, contactNumber } = req.body;

    try {
        const newUser = new User({
            firstName,
            lastName,
            rollNo,
            password,
            contactNumber
        });

        await newUser.save();
        res.status(200).json({ message: "Student registered successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Read (GET all)
app.get('/api/students', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update (PUT)
app.put('/api/update/:rollNo', async (req, res) => {
    const { firstName, lastName, contactNumber } = req.body;

    try {
        const updatedUser = await User.findOneAndUpdate(
            { rollNo: req.params.rollNo },
            { firstName, lastName, contactNumber },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json({ message: "Student updated successfully", updatedUser });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete (DELETE)
app.delete('/api/delete/:rollNo', async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ rollNo: req.params.rollNo });

        if (!deletedUser) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
