const mymodule = require('./mymodule.js')  // load module

mymodule(process.argv[2], process.argv[3], function (err, files) {  // call module function (filepath, extension, function)
    if (err)  // if error
        return console.error('Error:', err)  // return error

    files.forEach(function (file) {  // loop through all files in folder
        console.log(file)  // print file
    })
})