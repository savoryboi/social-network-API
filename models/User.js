const mongoose = require('mongoose');

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
    thoughts: [], 
    friends: []
})

const User = mongoose.model('User', userSchema);

// User.create(
//     {
//         username: 'savory', 
//         email: 'andy@fake.com', 
//         thoughts: [], 
//         friends: []
//     }
// )

module.exports = User;