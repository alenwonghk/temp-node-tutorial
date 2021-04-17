// ES6: import http from 'http';
const http = require('http')

//  req = request; res = respond
const server = http.createServer(  (req, res) => {
    if (req.url === '/') {
        res.write('<h1>Welcome</h1>')
        res.end('Welcome to our homepage')
    } else if (req.url === '/about') {
        res.end('About us')
    } else {
        res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for </p>`)
    }
} )

server.listen(5000)

