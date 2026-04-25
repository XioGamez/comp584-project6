const net = require('net')  // import Node's tcp networking module

function zeroFill (i) {  // function for 2-digit formatting
    return (i < 10 ? '0' : '') + i  // add leading zero if number less than 10
}

function now () {  // current timestamp
    const date = new Date()  // get current date and time

    return date.getFullYear() + '-' +  // year (e.g., 2026)
        zeroFill(date.getMonth() + 1) + '-' +  // month
        zeroFill(date.getDate()) + ' ' +  // day of month
        zeroFill(date.getHours()) + ':' +  // hours (24-hour)
        zeroFill(date.getMinutes())  // minutes
}

const server = net.createServer(function (socket) {  // create tcp server, runs on each connection
    socket.end(now() + '\n')  // send formatted time -> close connection
})

server.listen(Number(process.argv[2]))  // start server on port from command-line argument