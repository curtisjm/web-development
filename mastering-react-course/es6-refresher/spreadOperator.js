const first = [1, 2, 3]
const second = [4, 5, 6]

// old way of combining
const combined = first.concat(second)

// combine with spread operator
const combined2 = [...first, ...second]

// can also add items throughout the array
const combined3 = [...first, 'a', ...second, 'b']

// use spread for cloning
const clone = [...first]

// use for objects
const firstObj = { name: 'Mosh' }
const secondObj = { job: 'Instructor' }

const combinedObj = { ...firstObj, ...secondObj, location: 'Australia' }