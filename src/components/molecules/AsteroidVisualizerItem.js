import React from 'react'

import '../../scss/molecules/AsteroidVisualizerItem.scss'

const AsteroidVisualizerItem = ({ name, handleClick }) => {

  return(
    <button type="button" onClick={ handleClick } className="AsteroidVisualizerItem">
      <span className="text-uppercase">{ name }</span>
      <div className="AsteroidVisualizerItem__dot">
        <div className="wave"></div>
      </div>
    </button>
  )
}

export default AsteroidVisualizerItem