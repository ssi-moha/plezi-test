import React from 'react'
import { getImageUrl } from '../../utils'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import {
    MovieCardBlock,
    BackgroundImage,
    ReturnIcon,
    LoaderBlock,
} from './style'
import TextDetails from './TextDetails'
import { MovieDetails } from '../../types/MovieDetails'
// @ts-ignore
import { Ring } from 'react-awesome-spinners'
import { AxiosError } from 'axios'

interface Props {
    movie: MovieDetails | null
    isLoading: boolean
    error: AxiosError | null
}

const MovieDetailsCard: React.FC<Props> = ({ movie, isLoading, error }) => {
    if (isLoading)
        return (
            <LoaderBlock>
                <Ring size={128} />
            </LoaderBlock>
        )

    if (!movie) {
        console.error(error)
        return <></>
    }

    const backgroundImgUrl = getImageUrl(movie.poster_path, 780)
    const imgUrl = getImageUrl(movie.poster_path)

    return (
        <MovieCardBlock imgUrl={imgUrl}>
            <BackgroundImage src={backgroundImgUrl} alt={movie.title} />
            <Link to="/">
                <ReturnIcon />
            </Link>
            <Row>
                <Col xl={3} lg={4} md={12} sm={12} xs={12}>
                    <img src={imgUrl} alt={movie.title} />
                </Col>
                <TextDetails movie={movie} />
            </Row>
        </MovieCardBlock>
    )
}

export default MovieDetailsCard
