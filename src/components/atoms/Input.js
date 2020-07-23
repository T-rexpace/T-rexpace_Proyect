import React  from 'react'
import '../../scss/atoms/Input.scss'

const Input = (props) => {
    return(
        <div className="form">
            <label>{ props.label || "Label"}</label>
            <input
                autoFocus={ props.active }
                placeholder={ props.placeholder || props.label || "Placeholder" }
                type="text" 
                name={ props.label } 
            />
        </div>
    )
}

export default Input