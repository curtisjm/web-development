import express from 'express'
import Joi from 'joi'

const router = express.Router()

interface Course {
    id: number
    name: string
}

const courses: Course[] = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]

router.get('/', (req, res) => {
    res.send(courses)
})

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course)
        return res
            .status(404)
            .send('The course with the given ID was not found.')
    res.send(course)
})

router.get('/:year/:month', (req, res) => {
    // use req.query to get query parameters
    // ex: ?sortBy=name
    res.send(req.query)
})

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

export default router