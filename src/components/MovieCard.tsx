import React from 'react'
import { Movie } from '../types/Movie'
import styled from 'styled-components'
import { getImageUrl } from '../utils'

interface Props {
    movie: Movie
}

const MovieTitle = styled.h2`
    position: absolute;
    max-width: 200px;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    color: white;
`
const ImageContainer = styled.img`
    border-radius: 10px;
    transition: opacity 0.5s linear;
`

const MovieCardContainer = styled.div<{ imgUrl: string | null }>`
    justify-content: center;
    display: flex;
    align-items: center;
    width: 300px;
    height: 450px;
    margin: 15px;

    @media (max-width: 768px) {
        margin: auto;
    }

    :hover {
        ${ImageContainer} {
            opacity: 0.6;
        }
        ${MovieTitle} {
            visibility: visible;
            opacity: 1;
        }
    }
`

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
