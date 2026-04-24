const fs = require('fs')  // load the filesystem module from the Node.js core library

fs.readFile(process.argv[2], function (err, file) {  // read file -> function (collect value from callback function)
    // inside function
    if (err)  // if error
        return console.log(err)  // print error

    // else
    const count = file.toString().split('\n').length - 1  // convert buffer to string -> split string @  '\n' (newline character) -> minus 1 from newline count
    console.log(count)  // print newline count
})