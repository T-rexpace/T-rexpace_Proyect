import React  from 'react'
import '../../scss/atoms/Input.scss'

const Input = (props) => {
  return(
    <div className="form">
      <label>{ props.label || "Label"}</label>
      <input
        autoFocus={ props.active }
        placeholder={ props.placeholder || props.label || "Placeholder" }
        type={ props.type || "text" }
        name={ props.label }
        id={ props.id }
        name={ props.name }
      />
    </div>
  )
}

export default Input