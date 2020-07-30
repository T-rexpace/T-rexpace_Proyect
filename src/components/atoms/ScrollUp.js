import React from 'react'
import  ArrowUp from '../icons/ArrowUp'

import '../../scss/atoms/ScrollUp.scss'

const ScrollUp = (props) => {
  return (
    <a className="ScrollUp" href={ props.id }>
      <ArrowUp
        color="#ffffff"
      />
    </a>
  )
}

export default ScrollUp