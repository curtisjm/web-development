import React from 'react'
import Joi from 'joi'
import Form from './common/Form'

class LoginForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {},
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    }

    doSubmit = () => {
        // call the server
        console.log('Submitted and calling the server...')
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* use inherited methods to render inputs and buttons */}
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </div>
        )
    }
}

export default LoginForm
