import React, { useState } from 'react'
import fetchAsteroids from '../../hoc/fetchAsteroids'

import '../../scss/organisms/AsteroidsDetails.scss'
import { AsteroidVisualizer } from '../organisms/AsteroidVisualizer'
import AsteroidCard from '../molecules/AsteroidCard'
import Button from '../atoms/Button'
import { URL_IMAGES_REX } from '../atoms/UrlImages'

const AsteroidsDetailsComponent = ({ id, data: { getNeos = [] }}) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = e => {
    setIsSelected(true)
    console.log('clicked')
  }

  return(
    <section className="AsteroidsDetails" id={ id }>
      <div className="wrapper">
        <div className="row">
          <div className="column-6">
            <Button
              type="normal--disabled"
              title="Comparar"
            />
            <AsteroidVisualizer handleClick={ handleClick } />
          </div>
          <div className="column-4">
            {
              isSelected ? <AsteroidCard data={ getNeos } /> : <div className="T-rexContainer text-center">
                <figure>
                  <img
                    src={ `${URL_IMAGES_REX}t-rex-seleccion-de-asteroides.svg` }
                    alt="T-Rex te solicita escoger un asteroide"
                    width="253"
                  />
                </figure>
                <h2 className="text-uppercase">
                  Selecciona un <br/>
                  <span>asteroide</span>
                </h2>
                <p>para ver su información</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export const AsteroidsDetails = fetchAsteroids(AsteroidsDetailsComponent)