const http = require('http')  // import http module

function parseTime (time) {  // extract hour/minute/second
    return {
        hour: time.getHours(),  // hour
        minute: time.getMinutes(),  // minute
        second: time.getSeconds()  // second
    }
}

function unixTime (time) {  // UNIX timestamp
    return { unixtime: time.getTime() }  // milliseconds since 1970
}

const server = http.createServer(function (req, res) {  // Create http server

    const parsedUrl = new URL(req.url, 'http://localhost')  // parse URL
    const time = new Date(parsedUrl.searchParams.get('iso')) // iso time from query string -> convert into Date object
    let result

    if (parsedUrl.pathname === '/api/parsetime') {  // first endpoint
        result = parseTime(time)  // hour/minute/second
    }

    if (parsedUrl.pathname === '/api/unixtime') {  // second endpoint
        result = unixTime(time)  // unix timestamp
    }

    if (result) {  // if valid endpoint matched
        res.writeHead(200, { 'Content-Type': 'application/json' })  // json header
        res.end(JSON.stringify(result))  // json response
    } else {
        res.writeHead(404)  // not found status
        res.end()  // end response
    }
})
server.listen(Number(process.argv[2])) // start server listening on given port