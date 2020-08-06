import React from 'react'

import '../../scss/atoms/Button.scss'

const Button = (props) => {
  return (
    <button
      className={ `btn__${props.type}` }
      onClick={ props.onClick }
      value={ props.value }
      name={ props.name }
      id= { props.id }
    >
      { props.children || props.title || "Suscribirme"}
    </button>
  )
}

export default Button