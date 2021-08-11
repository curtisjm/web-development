function myFunc(message: String) {
	console.log(message)
}

// global objects & functions (part of js)
console.log()
// call a function after a delay
setTimeout(myFunc, 3000, 'Name')
clearTimeout()
// repetitively call a function after a given delay
setInterval(myFunc, 1000, 'Name 2')
clearInterval()
