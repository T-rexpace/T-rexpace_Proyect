import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
import Context from '../../Context'
import fetchAsteroids from '../../hoc/fetchAsteroids'

import '../../scss/organisms/AsteroidsDetails.scss'
import { AsteroidVisualizer } from '../organisms/AsteroidVisualizer'
import AsteroidCard from '../molecules/AsteroidCard'
import Button from '../atoms/Button'
import { URL_IMAGES_REX } from '../atoms/UrlImages'

const AsteroidsDetailsComponent = (props) => {
  const [show, element] = useNearScreen()

  console.log(props)

  return(
    <section className="AsteroidsDetails" ref={ element } id={ props.id }>
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
              <Context.Consumer>
                {
                  ({ isSelected }) => {
                    if (isSelected) {
                      return <br />
                    } else if (!isSelected) {
                      return (
                        <div className="T-rexContainer text-center">
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
                      )
                    }
                  }
                }
              </Context.Consumer>
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export const AsteroidsDetails = fetchAsteroids(AsteroidsDetailsComponent)