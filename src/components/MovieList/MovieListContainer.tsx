import React, { useEffect, useState } from 'react'
import getPopularMovies from '../../hooks/getPopularMovies'
import MovieList from './MovieList'

interface Props {}

const MovieListContainer: React.FC<Props> = () => {
    const { error, data, isLoading } = getPopularMovies()

    return <MovieList movies={data} isLoading={isLoading} />
}

export default MovieListContainer
