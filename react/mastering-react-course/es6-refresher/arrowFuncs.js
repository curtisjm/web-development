// normal function
const square = function(number) {
	return number * number
}

// arrow function with one parameter and one line return
const square2 = number => number * number
console.log(square2(5))

const jobs = [
	{id: 1, isActive: true },
	{id: 2, isActive: true },
	{id: 3, isActive: false },
]

// filter return array of objects that meet the condition from the predicate function
const activeJobs = jobs.filter(function(job) { return job.isActive })
const activeJobs2 = jobs.filter(job => job.isActive)

// arrow functions don't rebind this
const person = {
	talk() { 
		// setTimeout will execute function after the given delay
		setTimeout(function() {
			// part of a standalone function so this will log the window object
			console.log(this)
		}, 1000)
	},
	talk2() {
		setTimeout(() => {
			// will return a reference to the person object instead of the window object because because we used an arrow function
			console.log(this)
		})
	}
}

person.talk()
person.talk2()