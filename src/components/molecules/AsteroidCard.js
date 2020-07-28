import React from 'react'
import '../../scss/molecules/AsteroidCard.scss'

import Inofensivo from '../../images/icons/t-rex-asteroide-inofensivo.svg'
import Peligroso from '../../images/icons/t-rex-asteroide-peligroso.svg'
import Checkbox from '../atoms/Checkbox'
import imageDemo from '../../images/demoAsteroide.jpg'

const AsteroidCard = (props) => {
	
	const {
		_id,
		name,
		image,
		is_potentially_hazardous_asteroid,
		orbital_data: { first_observation_date },
		orbital_data: { last_observation_date },
		close_approach_data:{relative_velocity:{ kilometers_per_hour }},
		estimated_diameter:{kilometers:{ estimated_diameter_min }},
		estimated_diameter:{kilometers:{ estimated_diameter_max }},
	} = props.data

	const URL_IMAGE = `http://ec2-54-234-62-6.compute-1.amazonaws.com:8080/static/images/`

	return (
		<div className="asteroidCard">
			<div className="asteroidCard__picture">
				<div className="asteroidCard__picture-asteroid">
					<figure>
						<img src={ `${URL_IMAGE}${ image }` || imageDemo } alt={ name } />
					</figure>
				</div>
				<div className="asteroidCard__picture-indicator">
					{ is_potentially_hazardous_asteroid 
						? <img src={ Peligroso } alt={ name } />
						: <img src={ Inofensivo } alt={ name } />
					}
				</div>
				<div className="asteroidCard__picture-velocity">
					<p	>
						{ ((kilometers_per_hour /60) /60).toFixed(2) }
						<br />
						<small>
							km/s
						</small>
					</p>
				</div>
			</div>
				
			<div className="asteroidCard__details">
				<h3>{ name }</h3>
				<div>
					<p className="asteroidCard__details-title">Fecha de avistamiento</p>
					<div className="asteroidCard__details-date">
						<p><small>
							Primera
							<br />
							{ first_observation_date }
						</small></p>
						<p><small>
							Última
							<br />
							{ last_observation_date }
						</small></p>
					</div>
				</div>
				<div>
					<p className="asteroidCard__details-title">Diametro(km)</p>
					<div className="asteroidCard__details-diameter">
						<p><small>mínimo: { estimated_diameter_min }</small></p>
						<p><small>máximo: { estimated_diameter_max }</small></p>
					</div>
				</div>
				<Checkbox 
					label="Comparar"
					id={ _id }
				/>
			</div>
		</div>
	)
}

export default AsteroidCard