export class Point3 {
    constructor(public x: number, private y: number) {}

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y)
    }
}