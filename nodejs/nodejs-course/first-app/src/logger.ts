// in node, every file is a module
// the variables and functions in that file are scoped to that module

import { EventEmitter } from 'events'

var url: String = 'https://mylogger.io/log'

// make class extend EventEmitter when you want it to be able to raise events
class Logger extends EventEmitter {
    log(message: String) {
        // send http request
        console.log(message)

        // signal that an event has happened (raise an event)
        // use this instead of event emitter object to raise events in a class with the extension
        this.emit('messageLogged', {
            id: 'hello',
            url: 'http://website.com',
        })
    }
}

// export the log method as an object
// module.exports.log = log
// export url variable under a different name
// module.exports.endpoint = url

// export logger as a function
// module.exports = log
export default Logger
