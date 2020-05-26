import styled from 'styled-components'
import { Col } from 'react-flexbox-grid'
// @ts-ignore
import { Ring } from 'react-awesome-spinners'

export const MovieTitle = styled.h2`
    position: absolute;
    max-width: 200px;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    color: white;
`
export const ImageContainer = styled.img`
    border-radius: 10px;
    transition: opacity 0.5s linear;
`

export const MovieCardContainer = styled.div<{ imgUrl: string | null }>`
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
export const Container = styled.div`
    text-align: center;
    padding: 15px 50px;
    @media (max-width: 768px) {
        padding: 15px 0;
    }
`

export const MovieCardBlock = styled(Col)`
    margin: 15px;
`

export const Loader = styled(Ring)`
    margin: 50px;
`
