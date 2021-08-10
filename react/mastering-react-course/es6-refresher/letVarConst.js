// var allows variable to be accessible inside of function
// let is only accessible inside of the block
// const block scoped, can't be reassigned

function sayHello() {
	for(var i = 0; i < 5; i++) {
		console.log(i)
	}
	// will print with var, but not with let
	console.log(i)
}

sayHello()