const person = {
	name: 'Mosh',
	// both method declarations are valid
	walk: function() {},
	talk() {}
}

// both calls are valid
// use dot notation if you know ahead of time which property you want to access
person.talk()
person.name = 'Steve'

// use bracket notation when we don't know ahead of time which property will be accessed
person['name'] = 'John'
// can take user input for which property we want to access
const targetMember = 'name'
person[targetMember] = 'John'