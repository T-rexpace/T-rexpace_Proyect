import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/pages/Start.scss'

import Button from '../components/atoms/Button'
import { URL_IMAGES_REX } from '../components/atoms/UrlImages'

const Start = () => {
	return(
		<div className="wrapper">
			<div className="row welcome">
				<div className="column-6 text-right welcome__text">
					<h1 className="text-uppercase">Bienvenido</h1>
					<h2 className="text-uppercase">Acompáñame en este viaje</h2>
					<Link to="/home">
						<Button type="normal" title="acceder" />
					</Link>
				</div>
				<div className="column-6 text-center">
					<figure className="welcome__imageContainer">
						<img className="welcome__image img-fluid" src={ `${URL_IMAGES_REX}t-rex-bienvenida.svg` } alt="Hola, te dice T-REX" width="260" />
					</figure>
				</div>
			</div>
		</div>
	)
}

export default Start
