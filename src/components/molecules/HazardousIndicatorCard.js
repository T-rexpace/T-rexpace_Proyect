import React from 'react'
import '../../scss/molecules/HazardousIndicatorCard.scss'

import Inofensivo from '../../images/icons/t-rex-asteroide-inofensivo.svg'
import Peligroso from '../../images/icons/t-rex-asteroide-peligroso.svg'

const HazardousIndicatorCard = (props) => {
    return(
        <div className="HazardousCard">
            <div className="HazardousCard__indicator">
                <figure>
                    { props.peligroso 
                        ? <img src={ Peligroso } alt="HazardousIndicatorImg" />
                        : <img src={ Inofensivo } alt="HazardousIndicatorImg" />
                    }
                </figure>
            </div>
            <div className="HazardousCard__list">
                { props.data.map( item => (
                    <p key={ item.id } ><span>🟣</span> { item.name }</p>
                ))
                }
            </div>
        </div>
    )
}

export default HazardousIndicatorCard