import React from 'react'

import '../../scss/molecules/FormsLayout.scss'

const FormsLayout = (props) => {
    return(
        <div className="container__form">
            <div className="container__form--normal">
                <h3>Normal</h3>
                { props.normal }
            </div>
            <div className="container__form--active">
                <h3>Active</h3>
                { props.active }
            </div>
        </div>
    )
}

export default FormsLayout