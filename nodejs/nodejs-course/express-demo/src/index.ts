import dotenv from 'dotenv'
dotenv.config()

import Debug from 'debug'
// set debug environment variable to choose which namespace to use: > export DEBUG=app:startup
// can also set multiple > DEBUG=app:startup,app:db
// or all of the debuggers > DEBUG=*
const startupDebugger = Debug('app:startup')
const dbDebugger = Debug('app:db')

import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import config from 'config'
import logger from './middleware/logger.js'
import authenticator from './middleware/authenticator.js'
import courses from './routes/courses.js'
import home from './routes/home.js'

const app = express()

// use a templating engine
app.set('view engine', 'pug')
app.set('views', './src/views')

// middleware functions
// allow express to parse from request body
app.use(express.json())
// parse url encoded bodies
app.use(express.urlencoded({ extended: true }))
// load static assets
app.use(express.static('src/public'))
// third party middleware
app.use(helmet())
// next is reference to next middleware function in the pipeline
app.use(logger)
app.use(authenticator)

// for any routes that start with this path, use this router
app.use('/api/courses', courses)
app.use('/', home)

// configuration
console.log(`Application Name: ${config.get('name')}`)
console.log(`Mail Server: ${config.get('mail.host')}`)
// console.log(`Mail Password: ${config.get('mail.password')}`)
console.log(`Mail Password: ${process.env.APP_PASSWORD}`)

if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
    startupDebugger('Morgan enabled...')
}

// dynamically set port if needed because of environment variable on machine
const port: number | string = process.env.PORT || 3000
app.listen(3000, () => {
    console.log(`Listening on port ${port}...`)
})
