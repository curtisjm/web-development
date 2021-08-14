// run tsc <file>.ts && node <file>.js to run it

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
    first: string
    last: string
    // and add additional properties with key value
    // property with key: string, value: any
    [key: string]: any
}

const person: Person = {
    first: 'Jeff',
    last: 'Delaney',
}

const person2: Person = {
    first: 'John',
    last: 'Doe',
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
    constructor(public value: T) {}
}

let x: Observable<Person>

// enums
enum Color {
    Red,
    Green,
    Blue,
}

let backgroundColor = Color.Blue

// type assertions
let message
message = 'abc'
let endsWithC = (<string>message).endsWith('c')
let alternativeWay = (message as string).endsWith('c')

// classes
class Point {
    private x: number
    private y: number

    // make parameters optional with ?
    // optional parameters go on right side
    constructor(x?: number, y?: number) {
        this.x = x
        this.y = y
    }

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y)
    }

    getDistance(another: Point) {
        // ...
    }

    getX() {
        return this.x
    }

    setX(value: number) {
        if(value < 0) 
            throw new Error('value cannot be less than 0')
        this.x = value
    }

    // property version of getters / setters
    get X() {
        return this.x
    }

    set X(value: number) {
        if(value < 0) 
            throw new Error('value cannot be less than 0')
        this.x = value
    }
}

let point = new Point(2, 5)
let point2 = new Point()
point.draw()

// use properties
point.X = 10

class Point2 {
    // prefix constructor parameter with access modifier to generate and initialize a field
    constructor(public x: number, private y: number) {}

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y)
    }
}

// modules
import { Point3 } from './point'
let point3 = new Point3(5, 6)