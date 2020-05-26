import React from 'react'
import { DetailsBlock } from './style'
import ReactStars from 'react-stars'
import { MovieDetails } from '../../types/MovieDetails'

interface Props {
    movie: MovieDetails
}

const TextDetails: React.FC<Props> = ({ movie }) => {
    return (
        <DetailsBlock xs sm md lg xl>
            <h2>{movie.title}</h2>
            <h3>{movie.tagline}</h3>
            <p>{movie.overview}</p>
            <p>{`Genres : ${
                movie.genres && movie.genres.map((genre) => ` ${genre.name}`)
            }`}</p>
            <p>{`Release Date : ${movie.release_date}`}</p>
            <p>{`Budget : $${
                movie.budget &&
                movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }`}</p>
            <p>
                Rating : <br />
                <ReactStars
                    edit={false}
                    value={movie.vote_average / 2}
                    size={24}
                    count={5}
                />
            </p>
            <p>
                Official Website : <a href={movie.homepage}>{movie.homepage}</a>
            </p>
        </DetailsBlock>
    )
}

export default TextDetails
