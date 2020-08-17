const express = require('express');
const logger = require('morgan');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.get('/', (req, res) => {
    res.send("This is main page. Heroku Test");
});

app.get('/about', (req, res) => {
    res.send("made by jiho5993");
});

app.listen(PORT, () => {
    console.log("server on http://localhost:" + PORT);
});