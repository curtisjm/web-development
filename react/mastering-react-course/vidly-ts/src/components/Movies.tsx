import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import { paginate } from '../utils/paginate'
import React, { Component } from 'react'
import Pagination from './common/Pagination'
import ListGroup from './common/ListGroup'
import MoviesTable from './MoviesTable'
import _ from 'lodash'

interface State {
    movies: Array<Movie> | []
    genres: Array<Genre> | []
    currentPage: number
    pageSize: number
    sortColumn: SortColumn
    selectedGenre: Genre | undefined
}

export interface Movie {
    _id: string
    title: string
    genre: Genre
    numberInStock: number
    dailyRentalRate: number
    publishDate?: string
    liked?: boolean
}

export interface Genre {
    _id: string
    name: string
}

export interface SortColumn {
    path: string
    order: Order
}

export type Order = boolean | 'asc' | 'desc'

export default class Movies extends Component {
    state: State = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        // initially sort by title in ascending order
        sortColumn: { path: 'title', order: 'asc' },
        selectedGenre: undefined,
    }

    componentDidMount() {
        const genres = [{ name: 'All Genres', _id: '' }, ...getGenres()]
        this.setState({ movies: getMovies(), genres })
    }

    handleDelete = (movie: Movie) => {
        // create a new array of movies with all of the movies except for the one deleted
        const movies = this.state.movies.filter(
            (m: Movie) => m._id !== movie._id
        )
        this.setState({ movies })
    }

    handleLike = (movie: Movie) => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked
        this.setState({ movies })
    }

    handlePageChange = (page: number) => {
        this.setState({ currentPage: page })
    }

    handleGenreSelect = (genre: Genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    handleSort = (sortColumn: SortColumn) => {
        this.setState({ sortColumn })
    }

    getPagedData = () => {
        const {
            movies: allMovies,
            pageSize,
            currentPage,
            selectedGenre,
            sortColumn,
        } = this.state

        // filter
        const filtered =
            selectedGenre && selectedGenre._id
                ? allMovies.filter(m => m.genre._id === selectedGenre._id)
                : allMovies

        // sort
        const sorted = _.orderBy(
            filtered,
            [sortColumn.path],
            [sortColumn.order]
        )

        // paginate
        const movies = paginate(sorted, currentPage, pageSize)

        return { totalCount: filtered.length, data: movies }
    }

    render() {
        const { length: count } = this.state.movies
        const { pageSize, currentPage, sortColumn } = this.state

        if (count === 0) return <p>There are no movies in the database</p>

        const { totalCount, data: movies } = this.getPagedData()

        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {totalCount} movies in the database</p>
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        onPageChange={this.handlePageChange}
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        )
    }
}
