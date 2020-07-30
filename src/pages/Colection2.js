import React, { useState, Fragment, useEffect }  from 'react'
import '../scss/pages/Colection.scss'
import fetchAsteroids from '../hoc/fetchAsteroids'

import AsteroidCard from '../components/molecules/AsteroidCard'
import Button from '../components/atoms/Button'

const ColectionList = ({data: { getNeos = [] } }) => {
  

const listNeos = getNeos.map( neo => (
    <div
    className="column-4 cardsColection__cards-item"
    key={ neo._id }
    >
      <AsteroidCard data={ neo } />
    </div>
  ))
  
  return(
    <Fragment>
      <div className="text-center">
        <Button type="normal" title="ir a las graficas" />
      </div>
      {listNeos}
    </Fragment>
  )
}

export const Colection2 = fetchAsteroids(ColectionList)