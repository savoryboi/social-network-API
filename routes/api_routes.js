const api_router = require('express').Router();

const { User, Thought, Reaction } = require('../models');

// Get all users
api_router.get('/users', (req, res) => {
    User.find()
        .then(data => {
            res.json(data)
        })
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

module.exports = api_router;