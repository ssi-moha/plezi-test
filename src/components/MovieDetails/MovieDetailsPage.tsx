import React from 'react'
import MovieDetailsCard from './MovieDetailsCard'
import { MovieDetails } from '../../types/MovieDetails'
import { AxiosError } from 'axios'
import MovieRecommandations from './MovieRecommandations'

interface Props {
    movie: MovieDetails | null
    isLoading: boolean
    error: AxiosError | null
}
const MovieDetailsPage: React.FC<Props> = ({ movie, isLoading, error }) => {
    return (
        <>
            <MovieDetailsCard
                movie={movie}
                isLoading={isLoading}
                error={error}
            />
            <MovieRecommandations />
        </>
    )
}

export default MovieDetailsPage
