const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const { User, Thought } = require('./models')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/users', (req, res) => {
    res.send('yesss')
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}!!!!`)
    });
});