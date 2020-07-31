import React from 'react'
import { Link } from 'react-router-dom'
import { useNearScreen } from '../../hooks/useNearScreen'

import '../../scss/organisms/HappyBirthday.scss'
import Button from '../atoms/Button'
import { URL_IMAGES_REX } from '../atoms/UrlImages'

const HappyBirthday = () => {
  const [show, element] = useNearScreen()

  return(
    <section className="HappyBirthday" ref={ element }>
      {
        show && <div className="wrapper">
          <div className="row">
            <div className="column-5">
              <figure>
                <img
                  src={ `${URL_IMAGES_REX}t-rex-feliz-cumpleannios.svg` }
                  alt="T-Rex te desea feliz cumpleaños"
                  width="390"
                />
              </figure>
            </div>
            <div className="column-4">
              <h2 className="text-uppercase">
                Tu cumpleaños
              </h2>
              <p className="mb-30">
                Descubre qué asteroide será el de mayor 
                aproximación cercano a la tierra en fechas 
                próximas al día de tu cumpleaños.
              </p>
              <Link to="/page-in-construction">
                <Button
                  type="normal"
                  title="Descubrir"
                />
              </Link>
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default HappyBirthday