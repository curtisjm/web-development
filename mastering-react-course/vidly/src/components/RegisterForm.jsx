import React from 'react'
import Joi from 'joi-browser'
import Form from './common/Form'

class RegisterForm extends Form {
    state = {
        data: { username: '', password: '', name: '' },
        errors: {},
    }

    schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Name'),
    }

    doSubmit = () => {
        // call the server
        console.log('Submitted and calling the server...')
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* use inherited methods to render inputs and buttons */}
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton('Register')}
                </form>
            </div>
        )
    }
}

export default RegisterForm
