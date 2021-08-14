const address = {
	street: '',
	city: '',
	country:''
}

const street1 = address.street
const city1 = address.city
const country1 = address.country

// use destructuring to avoid repetitive code
const { street, city, country } = address

// use an alias for the variable name, the variable name will now be st
const { street: st } = address