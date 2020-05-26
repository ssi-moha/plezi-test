import React from 'react'

import { Row } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import { Movie } from '../../types/Movie'
import MovieCard from './MovieCard'

import { Container, MovieCardBlock, Loader } from './style'

interface Props {
    movies: Movie[] | null
    isLoading: boolean
}

const MovieList: React.FC<Props> = ({ movies, isLoading }) => {
    if (!movies && isLoading)
        return (
            <Container>
                <Loader />
            </Container>
        )
    if (!movies) return <Container>No Data to display</Container>

    return (
        <Container>
            <Row center="xs">
                {movies.map((movie, index) => (
                    <MovieCardBlock key={index}>
                        <Link to={`/${movie.id}`}>
                            <MovieCard movie={movie} />
                        </Link>
                    </MovieCardBlock>
                ))}
            </Row>
            {isLoading && <Loader />}
        </Container>
    )
}

export default MovieList
