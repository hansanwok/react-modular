import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'features/Home'
import NotFound from 'features/NotFound'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
