const mongoose =  require('mongoose');
const moment = require('moment');


const thoughtSchema =  new mongoose.Schema({
    thoughtText: { type: String, required: true, max: 250 },
    createdAt: {type: Date, default: moment().format('MMMM Do YYYY, h:mm:ss a')}, 
    username: { type: String, required: true}, 
    reactions: [{
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
    }]
});

const Thought = mongoose.model('Thought', thoughtSchema)

// 
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

module.exports = { Thought, thoughtSchema };