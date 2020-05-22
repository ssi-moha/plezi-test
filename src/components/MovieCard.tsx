import React, { useState } from 'react'
import { Movie } from '../types/Movie'
import styled from 'styled-components'

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
`

const MovieCardContainer = styled.div<{ imgUrl: string | null }>`
    justify-content: center;
    display: flex;
    align-items: center;
    width: 300px;
    height: 450px;
    border-radius: 10px;
    margin: 15px;
    background: no-repeat url(${({ imgUrl }) => imgUrl});
    transition: opacity 0.5s linear;
    @media (max-width: 768px) {
        margin: auto;
    }

    :hover {
        opacity: 0.6;
        ${MovieTitle} {
            visibility: visible;
            opacity: 1;
        }
    }
`

const MovieCard: React.FC<Props> = ({ movie }) => {
    const imgUrl = `${process.env.REACT_APP_POSTER_URL}w300${movie.poster_path}`
    return (
        <MovieCardContainer imgUrl={imgUrl}>
            <MovieTitle>{movie.title}</MovieTitle>
        </MovieCardContainer>
    )
}

export default MovieCard
