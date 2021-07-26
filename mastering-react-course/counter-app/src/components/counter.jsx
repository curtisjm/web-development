import React, { Component } from 'react'

class Counter extends Component {
	// state contains data that this component needs
	state = {
		count: 0,
		tags: ['tag1', 'tag2', 'tag3']
		// generate random 200 x 200 pixel image
		// imageUrl: 'https://picsum.photos/200'
	}

	// handle click event for button
	// use arrow function to allow access to this in event handler method
	handleIncrement = product => {
		console.log(product)
		// use setState to update state
		this.setState({ count: this.state.count + 1 })
	}

	render() {
		return (
			// need to wrap jsx in fragment to only return one element
			<>
				{/* <img src={this.state.imageUrl}></img> */}
				{/* bootstrap classes */}
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={ () => this.handleIncrement(product) } className="btn btn-secondary brn-sm">Increment</button>
				{/* conditionally render content with and operator */}
				{this.state.tags.length === 0 && 'Please create a new tag!'}
				{this.renderTags()}
			</>
		)
	}

	renderTags() {
		// return a message if there are no tags
		if(this.state.tags.length === 0) return <p>There are no tags</p>
		// if there are items, render a list of them
		return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
	}

	// render classes dynamically
	getBadgeClasses() {
		let classes = 'badge m-2 bg-'
		classes += (this.state.count === 0) ? 'warning' : 'primary'
		return classes
	}

	formatCount() {
		const { count } = this.state
		return count === 0 ? 'Zero' : count
	}
}
 
export default Counter