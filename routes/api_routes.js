const api_router = require('express').Router();

const { userInfo } = require('os');
const { User, Thought } = require('../models');

// USER ROUTES!

// Get all users
api_router.get('/users', async (req, res) => {
    const users = await User.find().populate('thoughts') //references thoughts property on user model
    res.json(users)
     
});

// Get user by Id
api_router.get('/users/:id', (req, res) => {
    User.findOne({
        _id: req.params.id
    })
    .then(user => {
        res.json(user)
    })
});

// Post new user
api_router.post('/users', (req, res) => {
    User.create({
        username: req.body.username, 
        email: req.body.email
    }, (err, data) => {
        if (err) throw err;

        res.json(data)
    })
});

// update user by _id
api_router.put('/users/:id', async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, {$set: req.body})

    user.save()
    res.json(user)
});

// delete user by _id
api_router.delete('/users/:id', async (req, res) => {
    const deleted_user = await User.deleteOne({ _id: req.params.id })

    res.send(`user has been deleted`)
});



// THOUGHT ROUTES!

api_router.get('/thoughts', async (req, res) => {
    const all_thoughts = await Thought.find()
    res.json(all_thoughts);
});

api_router.get('/thoughts/:id', async (req, res) => {
    const thought = await Thought.findOne({_id: req.params.id})

    res.json(thought);
});

api_router.post('/thoughts', async (req, res) => {
    const user = await User.findOne({ _id: req.body.user_id})
    console.log(user);
    const new_thought = await Thought.create({
        thoughtText: req.body.thoughtText, 
        username: user.username, 
        userId: user._id
    });
    user.thoughts.push(new_thought._id)
    user.save()

    res.json(new_thought);
});

api_router.delete('/thoughts/:thoughtId', async (req, res) => {
    const deleted_thought = await Thought.deleteOne({_id: req.params.thoughtId})
    console.log(deleted_thought)
    res.send('thought has been deleted');
})

module.exports = api_router;