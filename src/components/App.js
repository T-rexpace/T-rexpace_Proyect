import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../pages/Layout'
import Start from '../pages/Start'
import Home from '../pages/Home'

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/start" component={ Start } />
          <Route exact path="/home" component={ Home } />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
