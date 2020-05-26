import React from 'react'
import { Movie } from '../../types/Movie'
import styled from 'styled-components'
import MovieCard from '../MovieCard'
import { Row, Col } from 'react-flexbox-grid'
// @ts-ignore
import { Ring } from 'react-awesome-spinners'
import { Link } from 'react-router-dom'

interface Props {
    movies: Movie[] | null
    isLoading: boolean
}

const Container = styled.div`
    text-align: center;
    padding: 15px 50px;
    @media (max-width: 768px) {
        padding: 15px 0;
    }
`

const MovieCardBlock = styled(Col)`
    margin: 15px;
`

const Loader = styled(Ring)`
    margin: 50px;
`

const MovieList: React.FC<Props> = ({ movies, isLoading }) => {
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
