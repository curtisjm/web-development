import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

mongoose
    .connect(process.env.DB_URL || 'x', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(error => console.error('Could not connect to MongoDB...', error))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
})

// create course class
const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
    const course = new Course({
        name: 'Node.js Course',
        author: 'Mosh',
        tags: ['node', 'backend'],
        isPublished: true,
    })

    const result = await course.save()
    console.log(result)
}
// createCourse()

async function getCourses() {
	/* --- Comparison Query Operators --- */
	// eq (equal)
	// ne (not equal)
	// gt (greater than)
	// gte (greater than or to)
	// le (less than)
	// lte (less than or equal to)
	// in
	// nin (not in)
	
	// ex: price between 10 and 20
	// -  Course.find({ price: { $gte: 10, $lte: 20 } })
	// ex: price is 10, 15, or 20
	// -  Course.find({ price: { $in: [10, 15, 20] } })

	/* --- Logical Query Operators --- */
	// or
	// and

	// ex: author is Mosh or the course is published
	// -  Course.find().or([ { author: 'Mosh }, { isPublished: true } ])

    // find all published courses with Mosh as the author
    // get 10 max
    // sort by name in ascending order (1 = asc, -1 = desc)
    // only get name and tags properties
    const courses = await Course.find({ author: 'Mosh', isPublished: 'true' })
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })
    console.log(courses)
}
getCourses()
