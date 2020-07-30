import React from 'react'
import '../../scss/molecules/HazardousIndicatorCard.scss'

import { URL_IMAGES } from '../atoms/UrlImages'

const HazardousIndicatorCard = (props) => {
	return(
		<div className="HazardousCard">
			<div className="HazardousCard__indicator">
				<figure>
					{ props.peligroso 
						? <img src={ `${ URL_IMAGES }asteroide-peligroso.png` } alt="asteroide-peligroso" />
						: <img src={ `${ URL_IMAGES }demoAsteroide.jpg` } alt="asteroide-no-peligroso" />
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