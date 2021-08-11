// in node, every file is a module
// the variables and functions in that file are scoped to that module

// get these variables from module wrapper function that node wraps our modules in when running
console.log(__filename)
console.log(__dirname)

var url: String = 'https://mylogger.io/log'

function log(message: String) {
    // send http request
    console.log(message)
}

// export the log method as an object
// module.exports.log = log
// export url variable under a different name
// module.exports.endpoint = url

// export logger as a function
module.exports = log
