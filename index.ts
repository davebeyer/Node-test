import express = require('express');
let path       = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/counter', (req, res) => {
    let file = path.join(__dirname, 'counter.html');
    res.sendFile(file);
});

app.listen(8080, () => {
    console.log("Listening on http://localhost:8080");
});

