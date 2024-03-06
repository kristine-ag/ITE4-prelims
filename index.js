const express = require('express')
const app = express()
const port = 8000;

app.use((req, res, next) => {
    console.log('Request Made')
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/', function (req, res) {
    res.sendFile(`./pages/home.html`, {root: __dirname})
})

app.get('/about', function (req, res) {
        res.sendFile(`./pages/about.html`, {root: __dirname})
})

app.get('/game', function (req, res) {
    res.sendFile(`./pages/game.html`, {root: __dirname})
})

app.get('/portfolio', function (req, res) {
    res.sendFile(`./pages/portfolio.html`, {root: __dirname})
})

app.get('/2048', function (req, res) {
    res.sendFile(`./pages/2048.html`, {root: __dirname})
})

app.get('/tictactoe', function (req, res) {
    res.sendFile(`./pages/tictactoe.html`, {root: __dirname})
})

app.get('/home', (req, res) => {
    res.redirect('/')
})

app.get('/aboutus', (req, res) => {
    res.redirect('/about')
})

app.use((req, res) => {
    res.status(404).sendFile(`./pages/error.html`, {root: __dirname})
})

app.listen(port, () => {
    console.log(`Server is Running On Port ${port}`)
})