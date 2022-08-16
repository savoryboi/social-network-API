const mongoose =  require('mongoose');
const moment = require('moment');

const thoughtSchema =  new mongoose.Schema({
    thoughtText: { type: String, required: true, max: 250 },
    createdAt: {type: Date, default: moment().format('MMMM Do YYYY, h:mm:ss a')}, 
    username: { type: String, required: true}, 
    reactions: []
})

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = { Thought, thoughtSchema };