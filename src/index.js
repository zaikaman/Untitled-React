import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import NhenvnbyhtmltodesignFREEversion08092024202311GMT7 from './views/nhenvnbyhtmltodesign-fre-eversion08092024202311gmt7'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={NhenvnbyhtmltodesignFREEversion08092024202311GMT7}
          exact
          path="/"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
