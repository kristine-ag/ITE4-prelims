const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const port = 8000;

app.use((req, res, next) => {
    console.log('Request Made')
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/', function (req, res) {
    res.sendFile(`./views/home.html`, {root: __dirname})
})

app.get('/about', function (req, res) {
    // res.sendFile(`./views/about.html`, {root: __dirname})
    res.render('about', {
        name: "Kristine Angela A. Gallawan",
        school: "Ateneo de Davao University",
        email: "kaagallawan@addu.edu.ph",
    })
})

app.get('/game', function (req, res) {
    res.sendFile(`./views/game.html`, {root: __dirname})
})

app.get('/portfolio', function (req, res) {
    res.sendFile(`./views/portfolio.html`, {root: __dirname})
})

app.get('/2048', function (req, res) {
    res.sendFile(`./views/2048.html`, {root: __dirname})
})

app.get('/tictactoe', function (req, res) {
    res.sendFile(`./views/tictactoe.html`, {root: __dirname})
})

app.get('/home', (req, res) => {
    res.redirect('/')
})

app.get('/aboutus', (req, res) => {
    res.redirect('/about')
})

app.use((req, res) => {
    res.status(404).sendFile(`./views/error.html`, {root: __dirname})
})

app.listen(port, () => {
    console.log(`Server is Running On Port ${port}`)
})