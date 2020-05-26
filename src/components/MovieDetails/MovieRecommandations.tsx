import React from 'react'
import useTMDbApi from '../../hooks/useTMDbApi'
import MovieList from '../MovieList/MovieList'
import { Movie } from '../../types/Movie'
import { useParams } from 'react-router-dom'

interface Props {}

type MovieResponse = {
    results: Movie[]
}

const MovieRecommandations: React.FC<Props> = () => {
    const { movieId } = useParams<{ movieId: string }>()
    const { data, isLoading } = useTMDbApi<MovieResponse>(
        `${process.env.REACT_APP_BASE_URL}movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`
    )

    return (
        <MovieList
            movies={data ? data.results.slice(0, 5) : null}
            isLoading={isLoading}
        />
    )
}

export default MovieRecommandations
