import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'

import Button from '../atoms/Button'
import '../../scss/organisms/Memorama.scss'
import memoramaCards from '../../images/icons/t-rex-tarjetas-memorama.svg'

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
                  src={ memoramaCards }
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