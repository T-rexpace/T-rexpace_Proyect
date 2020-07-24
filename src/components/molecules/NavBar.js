import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/molecules/NavBar.scss'

import IconColection from '../../images/icons/t-rex-seleccion-de-asteroides-home.svg'
import IconBirthday from '../../images/icons/regalo-de-cumpelannios.svg'
import IconGraphs from '../../images/icons/t-rex-graficas.svg'
import Arrow from '../icons/Arrow'

const NavBar = () => {
  return (
    <div className="navbar">
			<Link 
				to="#" 
				className="navbar__menu menu"
			>
				Asteroides
				<Arrow  className="arrow"/>
			</Link>
			<Link 
				to="#"
				className="navbar__menu"
			>
				Memorama
			</Link>
			<div className="navbar__submenu">
				<Link to="#" className="navbar__submenu-link">
					<img 
						src={ IconColection } 
						alt="IconnColection" 
						className="icon"
					/>
					Colección
				</Link>
				<Link to="#" className="navbar__submenu-link">
					<img 
						src={ IconBirthday } 
						alt="IconnBirthday" 
						className="icon"
					/>
					Cumpleaños
				</Link>
				<Link to="#" className="navbar__submenu-link">
					<img 
						src={ IconGraphs } 
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