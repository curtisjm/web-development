// in React, we use the map method to render a list of items

// map function calls the callback function one time for each element of the array
const colors = ['red', 'green', 'blue']
// create an array of jsx list items from the colors 
// use template literal for color
const items = colors.map(color => `<li>${color}</li>`)
console.log(items)