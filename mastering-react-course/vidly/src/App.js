import { Route, Redirect, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import Movies from './components/Movies'
import NotFound from './components/NotFound'
import Rentals from './components/Rentals'
import Customers from './components/Customers'
import NavBar from './components/NavBar'
import MovieForm from './components/MovieForm'
import LoginForm from './components/LoginForm'

export default class App extends Component {
    render() {
        return (
            <>
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/login" component={LoginForm} />
                        <Route path="/movies/:id" component={MovieForm} />
                        <Route path="/movies" component={Movies}></Route>
                        <Route path="/customers" component={Customers}></Route>
                        <Route path="/rentals" component={Rentals}></Route>
                        <Route path="/not-found" component={NotFound}></Route>
                        {/* redirect from root to movies directory to set it as home page */}
                        <Redirect exact from="/" to="/movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </>
        )
    }
}
