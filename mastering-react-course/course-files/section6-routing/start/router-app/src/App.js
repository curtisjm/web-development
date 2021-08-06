import React, { Component } from 'react'
import NavBar from './components/navbar'
import Products from './components/products'
import Posts from './components/posts'
import Home from './components/home'
import Dashboard from './components/admin/dashboard'
import ProductDetails from './components/productDetails'
import NotFound from './components/notFound'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="content">
                    {/* use switch to prevent rendering multiple components on
                    the same page // order routes from most to least specific */}
                    <Switch>
                        <Route
                            // pass route parameter
                            path="/products/:id"
                            component={ProductDetails}
                        />
                        <Route
                            // use render instead of component to pass props to component
                            path="/products"
                            render={props => (
                                // make sure to pass additional props object to include route info
                                <Products sortBy="newest" {...props} />
                            )}
                        />
                        {/* make parameters optional with ? */}
                        <Route path="/posts/:year?/:month?" component={Posts} />
                        <Route path="/admin" component={Dashboard} />
                        <Redirect from="/messages" to="/posts" />
                        <Route path="/not-found" component={NotFound} />
                        {/* use exact for making sure this component is only
                        displayed if the user is at the exact url */}
                        <Route path="/" exact component={Home} />
                        {/* use redirect when no valid url is found */}
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App
