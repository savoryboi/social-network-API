const { mongoose, SchemaTypes } = require('mongoose');
const { thoughtSchema } = require('./Thought');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true,
        required: true,
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true
        // match valid email format --> look into mongoose matching vallidation
    }, 
    thoughts: [{
        type: SchemaTypes.ObjectId, 
        ref: 'thought'
    }],
    friends: []
})

const User = mongoose.model('User', userSchema);

// User.deleteMany({})
// .then(() => console.log('users deleted'));

module.exports = User;