
// ts will implicitly infer type of variable like this
let num = 23
// don't bother explicitly typing it like this:
let num2: number = 25


// create your own type
type Style = 'bold' | 'italic'
let font: Style


// create interfaces for objects
interface Person {
	// maintain required properties
	first: string,
	last: string,
	// and add additional properties with key value
	// property with key: string, value: any
	[key: string]: any

}

const person: Person = {
	first: 'Jeff',
	last: 'Delaney'
}

const person2: Person = {
	first: 'John',
	last: 'Doe'
}


// annotate function arguments
function pow(x: number, y: number) {
	return Math.pow(x, y)
} 

// can annotate a specific return value type
function pow2(x: number, y: number): string {
	return Math.pow(x, y).toString()
} 


// strongly type array
const arr: number[] = []
arr.push(12)

// generics
class Observable<T> {
	constructor(public value: T) {

	}
}

let x: Observable<Person>