const http = require('http')  // import http module
const map = require('through2-map')  // import transform stream helper

const server = http.createServer(function (req, res) {  // create http server
    if (req.method !== 'POST') {  // only allow post requests
        return res.end('send me a POST\n')  // reject non-POST requests
    }

    res.writeHead(200, { 'content-type': 'text/plain' })  // response header (plain text)

    req.pipe(map(function (chunk) {  // pipe request body through transform stream
        return chunk.toString().toUpperCase()  // convert data to uppercase
    })).pipe(res)  // send data to response
})
server.listen(Number(process.argv[2]))  // start server listening on given port