import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'

import '../../scss/organisms/DiscoveryAsteroid.scss'
import tRexGraphics from '../../images/icons/t-rex-graficas.svg'
import asteroid from '../../images/asteroide-peligroso.png'

const DiscoveryAsteroid = () => {
  const [show, element] = useNearScreen()

  return(
    <section className="DiscoveryAsteroid" ref={ element }>
      {
        show && <div className="wrapper">
          <div className="row">
            <div className="column-6">
              <h2 className="text-uppercase">
                Conoce los asteroides 
                potencialmente peligrosos
              </h2>
              <p>
                Compara sus velocidades, diametro estimado 
                y más información que puedes explorar del 
                conjunto de datos que la NASA comparte de 
                estos objetos cercanos a la tierra.
              </p>
              <p className="h3 text-uppercase">
                Cientos de objetos en cards sencillas 
                de entender
              </p>
            </div>
            <div className="column-5">
              <figure className="DiscoveryAsteroid__asteroid">
                <img
                  src={ asteroid }
                  alt="Asteroide peligroso"
                  width="520"
                />
              </figure>
              <figure className="DiscoveryAsteroid__t-rex">
                <img
                  src={ tRexGraphics }
                  alt="T-Rex viendo asteroide"
                  width="250"
                />
              </figure>
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default DiscoveryAsteroid