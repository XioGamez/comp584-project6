const fs = require('fs')  // load the filesystem module from the Node.js core library
const path = require('path')  // load path module (https://www.w3schools.com/nodejs/nodejs_path.asp)

// use asynchronous I/O
fs.readdir(process.argv[2], function (err, files) {  // read all files in folder
    if (err)  // if error
        return console.log(err)  // print error

    files.forEach(function (file) {  // loop through all files in folder
        if ( path.extname(file) === '.' + process.argv[3])  // if file extension matches (add '.' to extension argument, e.g. "txt" -> ".txt")
            console.log(file)  // print file
    })
})