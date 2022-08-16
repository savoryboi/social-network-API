const express = require('express');
const db = require('./config/connection');

const { User, Thought } = require('./models')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/users', (req, res) => {
    User.create({
        username: req.body.username, 
        email: req.body.email
    }, (err, data) => {
        if (err) throw err;

        res.json(data)
    })
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}!!!!`)
    });
});