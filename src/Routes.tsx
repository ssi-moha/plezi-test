import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MovieListContainer from './components/MovieList/MovieListContainer'
import MovieDetails from './components/MovieDetails/MovieDetails'

interface Props {}
const Routes: React.FC<Props> = () => {
    return (
        <Switch>
            <Route exact path="/">
                <MovieListContainer />
            </Route>
            <Route path="/:movieId">
                <MovieDetails />
            </Route>
        </Switch>
    )
}

export default Routes
