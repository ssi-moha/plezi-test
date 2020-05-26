import React from 'react'
import { Movie } from '../../types/Movie'
import { getImageUrl } from '../../utils'
import { MovieCardContainer, ImageContainer, MovieTitle } from './style'

interface Props {
    movie: Movie
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    const imgUrl = getImageUrl(movie.poster_path)
    return (
        <MovieCardContainer imgUrl={imgUrl}>
            <ImageContainer src={imgUrl} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
        </MovieCardContainer>
    )
}

export default MovieCard
