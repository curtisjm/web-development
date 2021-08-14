import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello World</h1>
console.log(element)

// put element, or in most cases app, in the index.html root element
ReactDOM.render(element, document.getElementById('root'))
