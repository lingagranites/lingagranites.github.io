const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date:{
        type : Date,
        default:new Date()
    }
    
});

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;

