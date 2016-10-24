import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import ContentPage from './containers/ContentPage'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={ContentPage}/>
        <Route path="home" component={ContentPage}/>
    </Route>
);

export default routes
