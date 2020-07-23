import React from 'react'

import '../../scss/molecules/ColorCard.scss'

const ColorCard = (props) => {
  return (
    <article className="ColorCard">
      <div className={`ColorCard__color ${props.color}`}></div>
      <div className="ColorCard__details">
        <small>{ props.token }</small><br />
        <small>{ props.hexadecimal }</small>
      </div>
    </article>
  )
}

export default ColorCard