import React from 'react'
import { useParams } from 'react-router-dom'
import useTMDbApi from '../../hooks/useTMDbApi'
import { MovieDetails as MovieDetailsType } from '../../types/MovieDetails'
import MovieDetailsPage from './MovieDetailsPage'

interface Props {}
const MovieDetails: React.FC<Props> = () => {
    const { movieId } = useParams<{ movieId: string }>()
    const { data, isLoading, error } = useTMDbApi<MovieDetailsType>(
        `${process.env.REACT_APP_BASE_URL}movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    )

    return <MovieDetailsPage error={error} movie={data} isLoading={isLoading} />
}

export default MovieDetails
