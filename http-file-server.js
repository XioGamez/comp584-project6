const http = require('http')  // import http module
const fs = require('fs')  // load the filesystem module from the Node.js core library

const server = http.createServer(function (req, res) {  // create http server -> runs per request
    res.writeHead(200, { 'content-type': 'text/plain' })  // response header (plain text)

    fs.createReadStream(process.argv[3]).pipe(res)  // create readable stream from file -> pipe file stream directly into http response
})
server.listen(Number(process.argv[2]))  // server listening on given port