import express from 'express'
import Joi from 'joi'

const app = express()

// allow express to parse from request body
app.use(express.json())

interface Course {
    id: number
    name: string
}

const courses: Course[] = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course)
        return res
            .status(404)
            .send('The course with the given ID was not found.')
    res.send(course)
})

app.get('/api/posts/:year/:month', (req, res) => {
    // use req.query to get query parameters
    // ex: ?sortBy=name
    res.send(req.query)
})

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body)

    // 400 bad request
    if (error) return res.status(400).send(error.details[0].message)

    const course: Course = {
        id: courses.length + 1,
        // get name from the object in the body of the request
        name: req.body.name,
    }
    courses.push(course)
    // return course object to client because client may need to know about its properties such as the new id
    res.send(course)
})

app.put('/api/courses/:id', (req, res) => {
    // look up course
    // if does not exist, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course)
        return res
            .status(404)
            .send('The course with the given ID was not found.')

    // validate
    // if invalid, return 400
    // get the error from result object
    const { error } = validateCourse(req.body)

    // 400 bad request
    if (error) return res.status(400).send(error.details[0].message)

    // update course
    course.name = req.body.name
    // return updated course for client
    res.send(course)
})

app.delete('/api/courses/:id', (req, res) => {
    // look up course
    // if it doesn't exist, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course)
        return res
            .status(404)
            .send('The course with the given ID was not found.')

    // delete
    const index = courses.indexOf(course)
    courses.splice(index, 1)

    // return deleted course
    res.send(course)
})

function validateCourse(course: Course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    })

    return schema.validate(course)
}

// dynamically set port if needed because of environment variable on machine
const port: number | string = process.env.PORT || 3000
app.listen(3000, () => {
    console.log(`Listening on port ${port}...`)
})
