import React from 'react'
import '../../scss/atoms/Logotipo.scss'
import Logo from '../../images/brand/logotipo-negativo-color-corporativo.svg'

const Logotipo = () => {
    return(
        <div className="logotipo">
            <figure>
                <img width="200" src={ Logo } alt="T-REXPACE"/>
            </figure>
        </div>
    )
}

export default Logotipo