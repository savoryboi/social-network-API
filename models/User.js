const mongoose = require('mongoose');
const { thoughtSchema } = require('./Thought');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true, // is this right?
        required: true,
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true
        // match valid email format --> look into mongoose matching vallidation
    }, 
    thoughts: [{
        type: thoughtSchema, 
        ref: 'Thought'
    }], 
    friends: []
})

const User = mongoose.model('User', userSchema);


module.exports = User;