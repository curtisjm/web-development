import React, { Component } from 'react'
import Like from '../common/Like'
import Table from '../common/Table'

// bootstrap docs for table: https://getbootstrap.com/docs/5.0/content/tables/

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        // add two objects for like and delete columns
        // they don't need a path for sorting and don't have labels
        // add key and content properties for displaying special columns in table body and header
        {
            key: 'like',
            content: movie => (
                <Like
                    onClick={() => this.props.onLike(movie)}
                    liked={movie.liked}
                />
            ),
        },
        {
            key: 'delete',
            content: movie => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn sm"
                >
                    Delete
                </button>
            ),
        },
    ]

    render() {
        const { movies, onSort, sortColumn } = this.props

        return (
            <Table
                columns={this.columns}
                data={movies}
                sortColumn={sortColumn}
                onSort={onSort}
            />
        )
    }
}

export default MoviesTable
