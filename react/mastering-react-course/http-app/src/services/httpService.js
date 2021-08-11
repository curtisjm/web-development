import axios from 'axios'

// pass functions for successful and failed responses
// pass null here because we only want to intercepted failed responses
axios.interceptors.response.use(null, error => {
    // expected errors: errors that our api endpoint predict and return
    //      - 404: not found, 400: bad request -- client errors
    //      - should display a specific error message to user
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500

    // unexpected errors: should not happen under normal circumstances
    //      - network is down, server is down, database down, bug in code
    //      - log the errors
    //      - display a generic and friendly error message to user
    if (!expectedError) {
        console.log('Logging the error', error)
        alert('An unexpected error occurred')
    }
    // if error is expected
    return Promise.reject(error)
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}
