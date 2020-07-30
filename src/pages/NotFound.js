import React from 'react'

import '../scss/pages/NotFound.scss'
import { URL_IMAGES_REX } from '../components/atoms/UrlImages'

const NotFound = () => {
  return (
    <section className="NotFound wrapper">
      <div className="row">
        <div className="column-6">
          <figure>
            <img
              src={ `${URL_IMAGES_REX}t-rex-404.svg` }
              alt="¡Perdimos la ruta!"
              width="390"
            />
          </figure>
        </div>
        <div className="column-6">
          <figure className="QuestionMark text-center">
            <img
              src={ `${URL_IMAGES_REX}simbolo-pregunta.svg` }
              alt="?"
              width="90"
            />
          </figure>
          <p>
            Algo salió mal. Intenta refrescar
            la página o verifica la URL
          </p>
        </div>
      </div>
    </section>
  )
}

export default NotFound