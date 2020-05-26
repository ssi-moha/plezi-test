import styled from 'styled-components'
import { Col } from 'react-flexbox-grid'

export const LoaderBlock = styled.div`
    padding: 200px 0;
    width: 100%;
    text-align: center;
`

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: auto;
    opacity: 0.3 !important;
    z-index: -1;
    @media (max-width: 1023px) {
        display: none;
    }
`

export const MovieCardBlock = styled.div<{ imgUrl: string }>`
    position: relative;
    padding: 100px 15px;
    @media (max-width: 1023px) {
        background-color: #646262;
    }
    margin: 10px;
    overflow: hidden;
    border-radius: 15px;
    text-align: center;
    color: white;
    img {
        opacity: 1;
    }
`

export const ReturnIcon = styled.i`
    position: absolute;
    background-image: url('/assets/arrow-pointing-left.png');
    width: 30px;
    height: 30px;
    left: 15px;
    top: 15px;
    color: white;
    filter: invert(100%);
`

export const DetailsBlock = styled(Col)`
    text-align: justify;
    padding: 15px 50px;
    h2 {
        text-align: center;
    }
    a {
        color: white;
    }
`
