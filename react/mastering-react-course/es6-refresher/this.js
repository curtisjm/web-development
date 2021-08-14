// this returns a reference to the current object if we call a function as a method in an object
// if we call a function outside of an object, this will return the global object

const person = {
	name: 'Mosh',
	walk() {
		console.log(this)
	}
}

person.walk()

// walk constant is a function outside the object
const walk = person.walk
console.log(walk)
// will return undefined if React is in strict mode
walk()


// bind method will return a new instance of person object
const walk2 = person.walk.bind(person)
walk2()