import React, { Component } from 'react'

export default class lifecycleHooks extends Component {
    // can set state directly in constructor
    constructor() {
        super()
        console.log('Constructor')
    }

    // make ajax calls here to get data from server
    componentDidMount() {
        console.log('Mounted')
    }

    // called on change
    // compare new and old state or props
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        // decide whether or not to get new data based on changes in props or state
        if (prevProps.counter.value !== this.props.counter.value) {
            // ajax call and get new data from the server
        }
    }

    // called just before a component is removed from the DOM
    componentWillUnmount() {
        console.log('Unmount')
        // do cleanup here
    }

    render() {
        console.log('Rendered')
        return <div></div>
    }
}
