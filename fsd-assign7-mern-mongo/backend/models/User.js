const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    rollNo: {
        type: String,
        required: true,
        unique: true // Ensures each student has a unique Roll No
    },
    password: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
