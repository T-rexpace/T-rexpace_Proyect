import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/pages/Start.scss'

import Button from '../components/atoms/Button'
import Bienvenida from '../images/icons/t-rex-bienvenida.svg'

const Start = () => {
    return(
        <div className="wraper">
            <div className="row welcome">
                <div className="column-6 text-right welcome__text">
                    <h1>BIENVENIDO</h1>
                    <h2>ACOMPAÑAME EN ESTE VIAJE</h2>
                    <Link to="/home">
                        <Button type="normal" title="acceder" />
                    </Link>
                </div>
                <div className="column-6 text-center welcome__image">
                    <figure>
                        <img src={ Bienvenida } alt="Bienvenida" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Start