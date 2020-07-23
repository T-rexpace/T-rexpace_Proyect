import React from 'react'
import '../../scss/molecules/ModalSuscribe.scss'

import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Logotipo from '../atoms/Logotipo'

const ModalSuscribe = () => {
    return(
        <div className="modalSuscribe">
            <Logotipo />
            <p>
                Descubre cada mes los asteroides más impresionantes
            </p>
            <Input label="Nombre completo" />
            <Input label="Correo electronico" />
            <Button type="normal" />
        </div>
    )
}

export default ModalSuscribe