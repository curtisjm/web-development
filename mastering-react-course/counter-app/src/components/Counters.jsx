import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
				{this.props.counters.map(counter => (
					// pass onDelete as a prop in order to handle the event
					// the counters are part of this component's state, so we must handle it in this component
					<Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter} />
				))}
			</div>
		)
	}
}
