import React, { Component } from 'react'
import Joi from 'joi-browser'
import Input from './Input'
import Select from './Select'

class Form extends Component {
    state = {
        data: {},
        errors: {},
    }

    validate = () => {
        const options = { abortEarly: false }
        // take error from result object
        const { error } = Joi.validate(this.state.data, this.schema, options)
        if (!error) return null

        const errors = {}
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors
    }

    validateProperty = ({ name, value }) => {
        // set properties dynamically at runtime to avoid validating the entire form
        const obj = { [name]: value }
        const schema = { [name]: this.schema[name] }
        // take the error from result object
        const { error } = Joi.validate(obj, schema)
        return error ? error.details[0].message : null
    }

    // prevent full page reload on submission
    handleSubmit = e => {
        e.preventDefault()

        const errors = this.validate()
        // avoid setting errors to null
        this.setState({ errors: errors || {} })
        if (errors) return

        this.doSubmit()
    }

    // pick current target from event (e)
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors }
        const errorMessage = this.validateProperty(input)
        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name]

        const data = { ...this.state.data }
        data[input.name] = input.value

        this.setState({ data, errors })
    }

    // extract some elements to parent component to make them reusable with helper render methods
    renderButton(label) {
        return (
            <button disabled={this.validate()} className="btn btn-primary">
                {label}
            </button>
        )
    }

    renderInput(name, label, type = 'text') {
        const { data, errors } = this.state

        return (
            <Input
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        )
    }

    renderSelect(name, label, options) {
        const { data, errors } = this.state

        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        )
    }
}

export default Form
