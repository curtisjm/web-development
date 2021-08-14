// docs: https://nodejs.org/api/events.html

// import { EventEmitter } from 'events'
// const emitter = new EventEmitter()

import Logger from './logger.js'

const logger = new Logger()

// register a listener
logger.on('messageLogged', e => {
    console.log('Listener called', e)
})

logger.log('message')
