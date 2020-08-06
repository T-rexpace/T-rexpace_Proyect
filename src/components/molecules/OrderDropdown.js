import React from 'react'
import '../../scss/molecules/OrderDropdown.scss'

import Arrow from '../icons/Arrow'

const OrderDropdown = (props) => {
  return(
    <div className="dropDown">
      <p className="dropDown__order">
        Ordenar por <Arrow color="#fff" className="arrow" />
      </p>
      <div className="dropDown__menu">
        <p className="dropDown__menu-velocity h2--bb">
          Velocidad
        </p>
        <p className="dropDown__menu-sighting h2--bb">
          Avistamiento
        </p>
        <p className="dropDown__menu-diameter">
          Diametro
        </p>

        <div className="dropDown__velocity">
          <p className="h2--bb" onClick={ props.moreVelocity }>Más rápido</p>
          <p onClick={ props.lessVelocity }>Más lento</p>
        </div>

        <div className="dropDown__sighting">
          <p className="h2--bb" onClick={ props.moreSighting }>Más reciente</p>
          <p onClick={ props.lessSighting }>Más remoto</p>
        </div>

        <div className="dropDown__diameter">
          <p className="h2--bb" onClick={ props.moreDiameter }>Máximo</p>
          <p onClick={ props.lessDiameter }>Mínimo</p>
        </div>
      </div>
    </div>
  )
}

export default OrderDropdown