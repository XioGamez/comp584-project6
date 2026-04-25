const http = require('http')  // import http module
const bl = require('bl')  // import buffer list module

const results = []  // store responses
let count = 0  // counter

function printResults () {  // print all results in order
    for (let i = 0; i < 3; i++) {  // loop through expected 3 urls
        console.log(results[i])  // print response for each url
    }
}

function httpGet (index) {  // fetch a url index
    http.get(process.argv[2 + index], function (response) {  // Make http get request using CLI argument
        response.pipe(bl(function (err, data) {
            if (err) {  //if error
                return console.error(err)  // print error
            }

            results[index] = data.toString()  // convert buffer to string
            count++  // increment complete request counter

            if (count === 3)  // if all requests finished
                printResults()  // print results in order
        }))
    })
}

for (let i = 0; i < 3; i++) {  // loop through 3 input urls
    httpGet(i)  // start async http request for urls
}