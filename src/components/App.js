import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../pages/Layout'
import Start from '../pages/Start'
import Home from '../pages/Home'
import Colection from '../pages/Colection'
import { Colection2 } from '../pages/Colection2'
import Memorama from '../pages/Memorama'
import PageInConstruction from '../pages/PageInConstruction'
import NotFound from '../pages/NotFound'
import Graphs from '../pages/Graphs'

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
          <Route exact path="/graphs" component={ Graphs } />
          <Route exact path="/page-in-construction" component={ PageInConstruction } />
          <Route component={ NotFound } />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
