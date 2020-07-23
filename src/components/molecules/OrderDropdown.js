import React from 'react'
import '../../scss/molecules/OrderDropdown.scss'

const OrderDropdown = () => {

    const moreVelocity = () => alert('moreVelocity')
    const lessVelocity = () => alert('lessVelocity')
    const moreSighting = () => alert('moreSighting')
    const lessSighting = () => alert('lessSighting')
    const moreDiameter = () => alert('moreDiameter')
    const lessDiameter = () => alert('lessDiameter')

    return(
        <div className="dropDown">
            <p className="dropDown__order">Ordenar por »</p>
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
                    <p className="h2--bb" onClick={ moreVelocity }>Más rápido</p>
                    <p onClick={ lessVelocity }>Más lento</p>
                </div>

                <div className="dropDown__sighting">
                    <p className="h2--bb" onClick={ moreSighting }>Más reciente</p>
                    <p onClick={ lessSighting }>Más remoto</p>
                </div>

                <div className="dropDown__diameter">
                    <p className="h2--bb" onClick={ moreDiameter }>Máximo</p>
                    <p onClick={ lessDiameter }>Mínimo</p>
                </div>
            </div>
        </div>
    )
}

export default OrderDropdown