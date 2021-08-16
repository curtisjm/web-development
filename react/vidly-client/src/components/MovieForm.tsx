// @ts-nocheck
import React from 'react'
import Joi from 'joi'
import Form from './common/Form'
import { getMovie, saveMovie } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import { Movie, Genre } from './Movies'
import { RouteComponentProps } from 'react-router-dom'

interface State {
    data: {
        title: string
        genreId: string
        numberInStock: string
        dailyRentalRate: string
    }
    genres: Genre[]
    errors: {}
}

type TParams = { id: string }

interface Props {
    match: RouteComponentProps<TParams>
    history: number
}

class MovieForm extends Form {
    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: '',
        },
        genres: [],
        errors: {},
    }

    schema = Joi.object({
        // won't have an id provided from the user, so don't require it
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number()
            .required()
            .min(0)
            .max(100)
            .label('Number in Stock'),
        dailyRentalRate: Joi.number()
            .required()
            .min(0)
            .max(10)
            .label('Daily Rental Rate'),
    })

    componentDidMount() {
        const genres = getGenres()
        this.setState({ genres })

        // if the id is new, we don't need to populate the form with an existing movie object
        const movieId = this.props.match.params.id
        if (movieId === 'new') return

        const movie = getMovie(movieId)
        if (!movie) return this.props.history.replace('/not-found')

        this.setState({ data: this.mapToViewModel(movie) })
    }

    // need to map data from the server to the proper structure for the form
    mapToViewModel(movie: Movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate,
        }
    }

    doSubmit = () => {
        saveMovie(this.state.data)

        this.props.history.push('/movies')
    }

    render() {
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderSelect('genreId', 'Genre', this.state.genres)}
                    {this.renderInput(
                        'numberInStock',
                        'Number in Stock',
                        'number'
                    )}
                    {this.renderInput('dailyRentalRate', 'Rate')}
                    {this.renderButton('Save')}
                </form>
            </div>
        )
    }
}

export default MovieForm
