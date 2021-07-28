import React, { Component } from 'react'
import Pagination from '../common/Pagination'
import ListGroup from '../common/ListGroup'
import MoviesTable from './MoviesTable'
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import { paginate } from '../utils/paginate'

// bootstrap docs for table: https://getbootstrap.com/docs/5.0/content/tables/

export default class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
    }

    componentDidMount() {
        const genres = [{ name: 'All Genres' }, ...getGenres()]
        this.setState({ movies: getMovies(), genres })
    }

    handleDelete = movie => {
        // create a new array of movies with all of the movies except for the one deleted
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies })
    }

    handleLike = movie => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked
        this.setState({ movies })
    }

    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    render() {
        const { length: count } = this.state.movies
        const {
            movies: allMovies,
            pageSize,
            currentPage,
            selectedGenre,
        } = this.state

        if (count === 0) return <p>There are no movies in the database</p>

        const filtered =
            selectedGenre && selectedGenre._id
                ? allMovies.filter(m => m.genre._id === selectedGenre._id)
                : allMovies

        const movies = paginate(filtered, currentPage, pageSize)

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
                    <p>Showing {filtered.length} movies in the database</p>
                    <MoviesTable
                        movies={movies}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                    />
                    <Pagination
                        onPageChange={this.handlePageChange}
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        )
    }
}
