import React, { Component } from 'react'
import '../stylesheets/styles.css'

export interface CalculatorProps {}

export interface CalculatorState {}

class Calculator extends Component<CalculatorProps, CalculatorState> {
    state = {}
    render() {
        return <h1>Hello</h1>
    }
}

export default Calculator
