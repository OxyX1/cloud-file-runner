const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/cloud', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get('/client', (req, res) => {
    res.sendFile(path.join(__dirname, 'public'))
});