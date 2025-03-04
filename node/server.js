const express = require('express');
const http = require('http');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/desktop', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home', 'index.html'));
});

/* 

add a user system that will login

*/

const server = http.createServer(app);
server.listen(port, () => {
    console.log('main node server is running.');
});