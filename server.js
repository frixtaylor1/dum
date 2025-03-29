const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.get('/license', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
