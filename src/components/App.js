import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../pages/Layout'
import Start from '../pages/Start'
import Home from '../pages/Home'
import Colection from '../pages/Colection'
import { Colection2 } from '../pages/Colection2'
import Memorama from '../pages/Memorama'

const App = () => {
  return(
    <BrowserRouter basename="T-rexpace_Proyect">
      <Layout>
        <Switch>
          <Route exact path="/" component={ Start } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/cards-colection" component={ Colection } />
          <Route exact path="/cards-colection2" component={ Colection2 } />
          <Route exact path="/memorama" component={ Memorama } /> 
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
