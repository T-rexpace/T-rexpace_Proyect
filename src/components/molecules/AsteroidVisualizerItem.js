import React from 'react'
import Context from '../../Context'

import '../../scss/molecules/AsteroidVisualizerItem.scss'

const AsteroidVisualizerItem = ({ name }) => {
  return(
    <Context.Consumer>
      {
        ({isSelected, activateSelected}) => {
          return (
            <button onClick={activateSelected} className="AsteroidVisualizerItem">
              <span className="text-uppercase">{ name }</span>
              <div className="AsteroidVisualizerItem__dot">
                <div className="wave"></div>
              </div>
            </button>
          )
        }
      }
    </Context.Consumer>
  )
}

export default AsteroidVisualizerItem