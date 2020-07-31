import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/molecules/NavBar.scss'

import Arrow from '../icons/Arrow'
import { URL_IMAGES_REX } from '../atoms/UrlImages'

const NavBar = () => {
  return (
    <div className="navbar">
			<Link 
				to="#" 
				className="navbar__menu menu"
			>
				Asteroides
				<Arrow color="#fff" className="arrow" />
			</Link>
			<Link 
				to="/memorama"
				className="navbar__menu"
			>
				Memorama
			</Link>
			<div className="navbar__submenu">
				<Link to="/cards-colection" className="navbar__submenu-link">
					<img 
						src={ `${URL_IMAGES_REX}tarjetas-menu.png` } 
						alt="IconnColection" 
						className="icon"
					/>
					Colección
				</Link>
				<Link to="/page-in-construction" className="navbar__submenu-link">
					<img 
						src={ `${URL_IMAGES_REX}regalo.svg` } 
						alt="IconnBirthday" 
						className="icon"
					/>
					Cumpleaños
				</Link>
				<Link to="graphs" className="navbar__submenu-link">
					<img 
						src={ `${URL_IMAGES_REX}t-rex-graficas.svg` } 
						alt="IconnGraphs" 
						className="icon"
					/>
					Gráficas
				</Link>
			</div>
		</div>
	)
}

export default NavBar