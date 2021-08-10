import React from 'react'
import queryString from 'query-string'

const Posts = ({ match, location }) => {
    // extracting query string from url: ?sortBy=newest&approved=true
    const { sortBy } = queryString.parse(location.search)

    return (
        <div>
            <h1>Posts</h1>
            Year: {match.params.year}, Month: {match.params.month}
        </div>
    )
}

export default Posts
