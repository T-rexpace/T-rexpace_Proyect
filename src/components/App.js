import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../pages/Layout'
import Start from '../pages/Start'
import Home from '../pages/Home'
import Colection from '../pages/Colection'

const App = () => {
  return(
    <BrowserRouter basename="T-rexpace_Proyect">
      <Layout>
        <Switch>
          <Route exact path="/" component={ Start } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/cards-colection" component={ Colection } />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
