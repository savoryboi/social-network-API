const mongoose = require('mongoose');

const reactSchema = mongoose.Schema({
    reactionBody: {
        type: String, 
        required: true, 
        max: 280
    }
})