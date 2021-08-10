import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Counters from './components/Counters'

export default class App extends Component {
    // state contains data that this component needs
    // data that is local or private to that component
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    }
    // props include data that we give to a component
    // props are read only

    // use arrow function to allow access to this in event handler method
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({ counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0
            return c
        })
        this.setState({ counters })
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = { ...counter }
        counters[index].value++
        this.setState({ counters })
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = { ...counter }
        counters[index].value--
        this.setState({ counters })
    }

    render() {
        return (
            <>
                <NavBar
                    totalCounters={
                        this.state.counters.filter(c => c.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </>
        )
    }
}
