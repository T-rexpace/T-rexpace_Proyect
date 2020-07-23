import React from 'react'

import '../../scss/atoms/Checkbox.scss'

const Checkbox = (props) => {
    return(
        <div className="checkbox">
            <input type="checkbox" id="check1" defaultChecked={ props.check }/>
            <label htmlFor="check1">{ props.label || "Check me!" }</label>
        </div>
    )
}

export default Checkbox