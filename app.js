const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    let myurl = './pages/'
    if(req.url == '/home'){
        myurl += 'home.html'
        res.statusCode = 200
    }
    else if(req.url == '/'){
        myurl += 'home.html'
        res.statusCode = 200
    }
    else if(req.url == '/about'){
        myurl += 'about.html'
        res.statusCode = 200
    }
    else if(req.url == '/portfolio'){
        myurl += 'portfolio.html'
        res.statusCode = 200
    }
    else if(req.url == '/game'){
        myurl += 'game.html'
        res.statusCode = 200
    }
    else if(req.url == '/2048'){
        myurl += '2048.html'
        res.statusCode = 200
    }
    else if(req.url == '/tictactoe'){
        myurl += 'tictactoe.html'
        res.statusCode = 200
    }
    else{
        myurl += 'error.html'
        res.statusCode = 200
    }

    fs.readFile(myurl, (err, data) => {
        if(err){
            console.log(err)
        }
        else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(4000, 'localhost', () => {
    console.log('listen hmmMmm')
})