import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

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
        <Router>
            <Theme>
                <Header>PLEZI</Header>
                <Routes />
            </Theme>
        </Router>
    )
}

export default App
