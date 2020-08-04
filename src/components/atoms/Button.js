import React from 'react'

import '../../scss/atoms/Button.scss'

const Button = (props) => {
  return (
    <button
      className={ `btn__${props.type}` }
      onClick={ props.onClick }
    >
      { props.children || props.title || "Suscribirme"}
    </button>
  )
}

export default Button