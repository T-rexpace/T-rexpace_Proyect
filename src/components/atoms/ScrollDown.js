import React from 'react'
import  Arrow from '../icons/Arrow'

import '../../scss/atoms/ScrollDown.scss'

const ScrollDown = () => {
  return (
    <a className="ScrollDown" href="#asteroidDetails">
      <Arrow
        height="35"
        width="35"
        fill="#ffffff"
      />
    </a>
  )
}

export default ScrollDown