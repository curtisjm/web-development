// object, can't reuse code for multiple people
const person = {
	name: 'Mosh',
	walk() {
		console.log('walk')
	}
}

// classes are used for when we need a blueprint for code that we will reuse

class Person {
	constructor(name) {
		this.name = name
	}

	walk() {
		console.log('walk')
	}
}

const person2 = new Person('John')
person2.walk()