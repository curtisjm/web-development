import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {
    render() {
        const { counters, onReset, onDelete, onIncrement, onDecrement } =
            this.props
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {counters.map(counter => (
                    // pass onDelete as a prop in order to handle the event
                    // the counters are part of this component's state, so we must handle it in this component
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    />
                ))}
            </div>
        )
    }
}
