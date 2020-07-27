import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'

import '../../scss/organisms/DiscoveryAsteroid.scss'
import tRexGraphics from '../../images/icons/t-rex-graficas.svg'

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
                  src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77d70b06-0d20-41fd-8e6a-5bf0b0a1cfa5/Asteroide.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200726T011502Z&X-Amz-Expires=86400&X-Amz-Signature=7ad605d3c75155f26b47c4e993186c13cfa1e0f0c9da719798945e3ed8edb027&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Asteroide.png%22"
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