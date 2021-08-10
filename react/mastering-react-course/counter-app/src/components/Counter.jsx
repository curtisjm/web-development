import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span>
                </div>
                <div className="col">
                    {/* use arrow function to pass values to event handler */}
                    <button
                        onClick={() =>
                            this.props.onIncrement(this.props.counter)
                        }
                        className="btn btn-secondary btn-sm"
                    >
                        +
                    </button>
                    <button
                        onClick={() =>
                            this.props.onDecrement(this.props.counter)
                        }
                        className="btn btn-secondary btn-sm m-2"
                        disabled={
                            this.props.counter.value === 0 ? 'disabled' : ''
                        }
                    >
                        -
                    </button>
                    <button
                        onClick={() =>
                            this.props.onDelete(this.props.counter.id)
                        }
                        className="btn btn-danger btn-sm"
                    >
                        x
                    </button>
                </div>
            </div>
        )
    }

    // render classes dynamically
    // these classes come from bootstrap
    getBadgeClasses() {
        let classes = 'badge m-2 bg-'
        classes += this.props.counter.value === 0 ? 'warning' : 'primary'
        return classes
    }

    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? 'Zero' : value
    }
}
