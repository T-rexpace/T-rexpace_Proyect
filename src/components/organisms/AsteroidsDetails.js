import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'

import AsteroidVisualizer from '../organisms/AsteroidVisualizer'
import '../../scss/organisms/AsteroidsDetails.scss'
import Button from '../atoms/Button'
import selectAndAsteroid from '../../images/icons/t-rex-seleccion-de-asteroides.svg'

const AsteroidsDetails = () => {
  const [show, element] = useNearScreen()

  return(
    <section className="AsteroidsDetails" ref={ element }>
      {
        show && <div className="wrapper">
          <div className="row">
            <div className="column-6">
              <Button
                type="normal--disabled"
                title="Comparar"
              />
              <AsteroidVisualizer />
            </div>
            <div className="column-4">
              <div className="T-rexContainer text-center">
                <figure>
                  <img
                    src={ selectAndAsteroid }
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
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default AsteroidsDetails