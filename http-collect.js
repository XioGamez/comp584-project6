const http = require('http')  // import http module
const bl = require('bl')  // import buffer list module

http.get(process.argv[2], function (response) {  // send get request to the url -> function (handle responses)
    response.pipe(bl(function (err, data) {  // collect all response data using bl
        if (err)  // if error
            return console.error(err)  // print error

        data= data.toString()  // convert buffer to string
        console.log(data.length)  //  print number of characters
        console.log(data)  // print full data
    }))
})