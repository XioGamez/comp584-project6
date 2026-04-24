const http = require('http')  // import the built-in HTTP module to make web requests

http.get(process.argv[2], function (response) {  // send get request to the url -> function (handle responses)
    response.setEncoding('utf8')  // convert buffer objects to strings
    response.on('data', console.log)  // data arrives -> print
    response.on('error', console.error)  // if errors -> print error
}).on('error', console.error)  // initial error -> print error