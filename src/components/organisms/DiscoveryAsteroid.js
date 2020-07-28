import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'

import '../../scss/organisms/DiscoveryAsteroid.scss'
import { URL_IMAGES_REX, URL_IMAGES } from '../atoms/UrlImages'

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
                  src={ `${URL_IMAGES}asteroide-peligroso.png` }
                  alt="Asteroide peligroso"
                  width="520"
                />
              </figure>
              <figure className="DiscoveryAsteroid__t-rex">
                <img
                  src={ `${URL_IMAGES_REX}t-rex-graficas.svg` }
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