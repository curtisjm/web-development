// run tsc <file>.ts && node <file>.js to run it
// ts will implicitly infer type of variable like this
var num = 23;
// don't bother explicitly typing it like this:
var num2 = 25;
var font;
var person = {
    first: 'Jeff',
    last: 'Delaney'
};
var person2 = {
    first: 'John',
    last: 'Doe'
};
// annotate function arguments
function pow(x, y) {
    return Math.pow(x, y);
}
// can annotate a specific return value type
function pow2(x, y) {
    return Math.pow(x, y).toString();
}
// strongly type array
var arr = [];
arr.push(12);
// generics
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
var x;
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
// type assertions
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var alternativeWay = message.endsWith('c');
// classes
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
