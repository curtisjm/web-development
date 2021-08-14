// import http
const http = require('http')
// used for file handling
const fs = require('fs')
// run server of port 3000
const port = 3000

// server request , response
const server = http.createServer(function(req, res) {
    // status code, headers you want to set
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if(error) {
            res.writeHead(404)
            res.write('Error: File not found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if(error) {
        console.log('Something went wrong ', error)
    } else {
        console.log('Server is listening on port ' + port )
    }
})