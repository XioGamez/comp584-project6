const fs = require('fs')  // load the filesystem module from the Node.js core library

let count = fs.readFileSync(process.argv[2]).toString().split('\n').length-1  // read file -> convert buffer to string -> split string @  '\n' (newline character) -> minus 1 from newline count
console.log(count)  // print newline count