const mongoose =  require('mongoose');
const { SchemaTypes } = require('mongoose');


const thoughtSchema =  new mongoose.Schema({
    thoughtText: { type: String, required: true, min: 1, max: 280 },
    createdAt: {type: Date, default: Date.now}, 
    username: { type: String, required: true}, 
    reactions: [{
        reactionId: {
            type: SchemaTypes.ObjectId
        },
        reactionBody: {
            type: String, 
            required: true, 
            min: 1,
            max: 280
        },
        username: {
            type: String, 
            required: true
        }, 
        createdAt: {
            type: Date, 
            default: Date.now
        }
    }]
});

const Thought = mongoose.model('thought', thoughtSchema)

// 
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

module.exports = { Thought, thoughtSchema };