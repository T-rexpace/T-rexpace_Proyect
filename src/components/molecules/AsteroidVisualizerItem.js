import React from 'react'

import '../../scss/molecules/AsteroidVisualizerItem.scss'

const AsteroidVisualizerItem = ({ name, handleClick, id }) => {

  return(
    <button type="button" onClick={ handleClick } className="AsteroidVisualizerItem" id={ id }>
      <span className="AsteroidVisualizerItem__name text-uppercase">{ name }</span>
      <div className="AsteroidVisualizerItem__dot">
        <div className="wave"></div>
      </div>
    </button>
  )
}

export default AsteroidVisualizerItem