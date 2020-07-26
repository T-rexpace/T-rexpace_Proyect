import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'

import Button from '../atoms/Button'
import '../../scss/organisms/HappyBirthday.scss'
import happyBirthday from '../../images/icons/t-rex-feliz-cumpleannios.svg'

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
                  src={ happyBirthday }
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
              <Button
                type="normal"
                title="Descubrir"
              />
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default HappyBirthday