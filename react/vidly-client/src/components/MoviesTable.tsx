import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Like from './common/Like'
import Table from './common/Table'
import { Movie, SortColumn } from './Movies'
import { Column } from './common/Table'

interface Props {
    movies: Movie[]
    sortColumn: SortColumn
    onSort: (sortColumn: SortColumn) => void
    onLike: (movie: Movie) => void
    onDelete: (movie: Movie) => void
}

class MoviesTable extends Component<Props> {
    columns: Column[] = [
        {
            path: 'title',
            label: 'Title',
            content: (movie: Movie) => (
                <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
            ),
        },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        // add two objects for like and delete columns
        // they don't need a path for sorting and don't have labels
        // add key and content properties for displaying special columns in table body and header
        {
            key: 'like',
            content: (movie: Movie) => (
                <Like
                    onClick={() => this.props.onLike(movie)}
                    liked={movie.liked}
                />
            ),
        },
        {
            key: 'delete',
            content: (movie: Movie) => (
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
