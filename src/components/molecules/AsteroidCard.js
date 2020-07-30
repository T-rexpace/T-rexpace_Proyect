import React from 'react'
import '../../scss/molecules/AsteroidCard.scss'



import Checkbox from '../atoms/Checkbox'
import imageDemo from '../../images/demoAsteroide.jpg'
import { URL_IMAGES_REX, URL_IMAGES } from '../atoms/UrlImages'

const AsteroidCard = (props) => {
	console.log(props)
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

	return (
		<div className="asteroidCard">
			<div className="asteroidCard__picture">
				<div className="asteroidCard__picture-asteroid">
					<figure>
						<img src={ `${URL_IMAGES}${ image }` || imageDemo } alt={ name } />
					</figure>
				</div>
				<div className="asteroidCard__picture-indicator">
					{ is_potentially_hazardous_asteroid 
						? <img src={ `${URL_IMAGES_REX}t-rex-asteroide-peligroso.svg` } alt={ name } />
						: <img src={ `${URL_IMAGES_REX}t-rex-asteroide-inofensivo.svg` } alt={ name } />
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
					<p className="asteroidCard__details-title">Diametro</p>
					<div className="asteroidCard__details-diameter">
						<p><small>mínimo: <br /> { estimated_diameter_min.toFixed(4) } km</small></p>
						<p><small>máximo: <br /> { estimated_diameter_max.toFixed(4) } km</small></p>
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