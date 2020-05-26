import React, { useState, useEffect } from 'react'
import useTMDbApi from '../../hooks/useTMDbApi'
import MovieList from './MovieList'
import useEventListener from '../../hooks/useEventListener'
import { Movie } from '../../types/Movie'

interface Props {}

const MovieListContainer: React.FC<Props> = () => {
    const [fetchUrl, setFetchUrl] = useState(
        `${process.env.REACT_APP_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    )
    const { data, isLoading, setNextPage, page } = useTMDbApi<Movie[]>(
        fetchUrl,
        true
    )
    const {} = useEventListener(setNextPage)

    useEffect(
        () =>
            setFetchUrl(
                `${process.env.REACT_APP_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
            ),
        [page]
    )

    return <MovieList movies={data} isLoading={isLoading} />
}

export default MovieListContainer
