import React from 'react'
import '../../scss/molecules/AsteroidCard.scss'

import Inofensivo from '../../images/icons/t-rex-asteroide-inofensivo.svg'
import Peligroso from '../../images/icons/t-rex-asteroide-peligroso.svg'
import Checkbox from '../atoms/Checkbox'

const AsteroidCard = (props) => {
    return (
        <div className="asteroidCard">
            <div className="asteroidCard__picture">
                <div className="asteroidCard__picture-asteroid">
                    <figure>
                        <img src={ props.data.image } alt={ props.data.name } />
                    </figure>
                </div>
                <div className="asteroidCard__picture-indicator">
                    { props.data.potentially_hazardous 
                        ? <img src={ Peligroso } alt={ props.data.name } />
                        : <img src={ Inofensivo } alt={ props.data.name } />
                    }
                </div>
                <div className="asteroidCard__picture-velocity">
                    <p>
                        { props.data.velocity }
                        <br />
                        <small>
                            km/s
                        </small>
                    </p>
                </div>
            </div>
            
            <div className="asteroidCard__details">
                <h3>{ props.data.name }</h3>
                <div>
                    <p>Fecha de avistamiento</p>
                    <div className="asteroidCard__details-date">
                        <p><small>
                            Primera
                            <br />
                            { props.data.first_observation }
                        </small></p>
                        <p><small>
                            Última
                            <br />
                            { props.data.last_observation }
                        </small></p>
                    </div>
                </div>
                <div>
                    <p>Diametro(km)</p>
                    <div className="asteroidCard__details-diameter">
                        <p><small>mínimo: { props.data.diameter_min }</small></p>
                        <p><small>máximo: { props.data.diameter_max }</small></p>
                    </div>
                </div>
                <Checkbox 
                    label="Comparar"
                />
            </div>
        </div>
    )
}

export default AsteroidCard