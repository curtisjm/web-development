import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify'
import http from './services/httpService'
import config from './config.json'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

// const config.apiEndpoint = 'https://jsonplaceholder.typicode.com/posts'

interface State {
    posts: Post[]
}

interface Post {
    userId: number
    id: number
    title: string
    body: string
}

class App extends Component {
    state: State = {
        posts: [],
    }

    async componentDidMount() {
        // a promise is an object that holds the result of an async operation
        // starts pending --> resolved (success) OR rejected (failure)
        // get data from response object
        const { data: posts } = await http.get(config['apiEndpoint:'])
        this.setState({ posts })
    }

    handleAdd = async () => {
        const obj = { title: 'a', body: 'b' }
        const { data: post } = await http.post(config['apiEndpoint:'], obj)

        const posts = [post, ...this.state.posts]
        this.setState({ posts })
    }

    handleUpdate = async (post: Post) => {
        post.title = 'UPDATED'
        // put updates all properties, patch updates one or more properties
        await http.put(config['apiEndpoint:'] + '/' + post.id, post)
        // http.patch(config.apiEndpoint + '/' + post.id, { title: post.tile })
        const posts = [...this.state.posts]
        const index = posts.indexOf(post)
        posts[index] = { ...post }
        this.setState({ posts })
    }

    handleDelete = async (post: Post) => {
        const originalPosts = this.state.posts

        // update ui first
        const posts = [...this.state.posts.filter(p => p.id !== post.id)]
        this.setState({ posts })

        // make call to server
        try {
            await http.delete(config['apiEndpoint:'] + '/' + post.id)
            // if there is an error deleting, put the ui back to how it was
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert('This post has already been deleted.')
            }
            this.setState({ posts: originalPosts })
        }
    }

    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() => this.handleUpdate(post)}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => this.handleDelete(post)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default App
