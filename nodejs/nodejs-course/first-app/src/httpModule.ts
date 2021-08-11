// docs: https://nodejs.org/api/http.htm

import * as http from 'http'

// http server is an event emitter
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World')
        res.end()
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]))
        res.end()
    }
})

// server.on('connection', socket => {
//     console.log('New connection.')
// })

server.listen(4000)

console.log('Listening on port 4000...')
