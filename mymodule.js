const fs = require('fs')  // load the filesystem module from the Node.js core library
const path = require('path')  // load path module

module.exports = function (dir, ext, callback) {  // export function
    fs.readdir(dir, function (err, files) {  // read asynchronously
        if (err)  // if error
            return callback(err);  // pass to callback

        files = files.filter(function (file){  // filter files by extension
            return path.extname(file) === '.' + ext  // return file with matching extension
        })
        callback(null, files);  // success -> ass null for error + files
    })
}