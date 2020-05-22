import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MovieListContainer from './components/MovieList/MovieListContainer'

interface Props {}
const Routes: React.FC<Props> = () => {
    return (
        <Switch>
            <Route exact path="/">
                <MovieListContainer />
            </Route>
        </Switch>
    )
}

export default Routes
