import React from 'react'

import '../../scss/atoms/Checkbox.scss'

const Checkbox = (props) => {
    return(
        <div className="checkbox">
            <input type="checkbox" id={ props.id } defaultChecked={ props.check }/>
            <label htmlFor={ props.id }>{ props.label || "Check me!" }</label>
        </div>
    )
}

export default Checkbox