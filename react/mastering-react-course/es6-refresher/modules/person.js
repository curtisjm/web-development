// have to export element to access it it other parts of the program

// use default for when you only need to export a single object
export default class Person {
	constructor(name) {
		this.name = name
	}

	walk() {
		console.log('walk')
	}
}