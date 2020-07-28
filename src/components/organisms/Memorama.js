import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'

import '../../scss/organisms/Memorama.scss'
import Button from '../atoms/Button'
import { URL_IMAGES_REX } from '../atoms/UrlImages'

const Memorama = () => {
  const [show, element] = useNearScreen()

  return(
    <section className="Memorama" ref={ element }>
      {
        show && <div className="wrapper">
          <div className="row">
            <div className="column-5">
              <h2 className="text-uppercase">
                Pon a prueba tu<br />
                <span>memoria</span>
              </h2>
              <Button
                type="normal"
                title="Acepta el reto"
              />
            </div>
            <div className="column-4">
              <figure>
                <img
                  src={ `${URL_IMAGES_REX}t-rex-tarjetas-memorama.svg` }
                  alt="Tarjetas del memorama"
                  width="407"
                />
              </figure>
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default Memorama