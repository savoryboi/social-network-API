const mongoose = require('mongoose');
const moment = require('moment');

const reactSchema = mongoose.Schema({
    reactionBody: {
        type: String, 
        required: true, 
        max: 280
    },
    username: {
        type: String, 
        required: true
    }, 
    createdAt: {
        type: Date, 
        default: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
});


module.exports = reactSchema;