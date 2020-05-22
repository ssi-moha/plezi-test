import React from 'react'
import styled from 'styled-components'
import Theme from './Theme'

import Routes from './Routes'

const Header = styled.div`
    height: 50px;
    margin: auto;
    background-color: ${(props) => props.theme.colors.secondary};
    padding-left: 15px;
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizes.medium};
    color: white;
`

function App() {
    return (
        <Theme>
            <Header>PLEZI</Header>
            <Routes />
        </Theme>
    )
}

export default App
