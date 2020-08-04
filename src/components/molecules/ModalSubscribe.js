import React from 'react'
import ReactDOM from 'react-dom'
import '../../scss/molecules/ModalSubscribe.scss'

import Button from '../atoms/Button'
import Close from '../icons/Close'
import Input from '../atoms/Input'
import { URL_IMAGEs_BRAND } from '../atoms/UrlImages'

const ModalSubscribe = (props) => {
  if (!props.isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="ModalSubscribe">
        <button type="button" onClick={ props.onClose } className="ModalSubscribe__close">
          <Close color="#D1066A" />
        </button>
        <figure className="ModalSubscribe__brandContainer text-center">
          <img className="ModalSubscribe__brand" src={ `${ URL_IMAGEs_BRAND }/imagotipo/imagotipo-positivo-color.svg` } />
        </figure>
        <p>
          Descubre cada mes los asteroides más impresionantes
        </p>
        <form action="https://gmail.us17.list-manage.com/subscribe/post?u=9cbf3c59ac1d81d793f4fe0e5&amp;id=7066a29eeb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <Input
            label="Nombre completo"
            id="mce-FNAME"
            name="FNAME"
          />
          <Input
            type="email"
            label="Correo electronico"
            name="EMAIL"
            id="mce-EMAIL"
          />
          <Button
            type="normal"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
          />
        </form>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default ModalSubscribe