import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import { paginate } from '../utils/paginate'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Pagination from './common/Pagination'
import ListGroup from './common/ListGroup'
import MoviesTable from './MoviesTable'
import SearchBox from './SearchBox'
import _ from 'lodash'

export default class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        searchQuery: '',
        selectedGenre: null,
        // initially sort by title in ascending order
        sortColumn: { path: 'title', order: 'asc' },
    }

    componentDidMount() {
        const genres = [{ name: 'All Genres', _id: '' }, ...getGenres()]
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
        this.setState({ selectedGenre: genre, searchQuery: '', currentPage: 1 })
    }

    handleSearch = query => {
        this.setState({
            searchQuery: query,
            selectedGenre: null,
            currentPage: 1,
        })
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn })
    }

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            searchQuery,
            movies: allMovies,
        } = this.state

        // filter
        let filtered = allMovies
        // if user has entered text into search bar
        if (searchQuery)
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            )
        // if we just want to filter by genre
        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id)

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
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state

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
                    <Link
                        to="/movies/new"
                        className="btn btn-primary"
                        style={{ marginBottom: 20 }}
                    >
                        New Movie
                    </Link>
                    <p>Showing {totalCount} movies in the database</p>
                    <SearchBox
                        value={searchQuery}
                        onChange={this.handleSearch}
                    />
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
