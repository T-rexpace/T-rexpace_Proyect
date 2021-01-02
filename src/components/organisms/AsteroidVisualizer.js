import React from 'react'
import fetchAsteroids from '../../hoc/fetchAsteroids'

import AsteroidVisualizerItem from '../molecules/AsteroidVisualizerItem'
import '../../scss/organisms/AsteroidVisualizer.scss'
import earth from '../../images/planeta-tierra.png'

const AsteroidVisualizerComponent = ({ data: { getNeos = [] }, handleClick }) => {
  return(
    <div className="AsteroidVisualizer">
      <figure className="AsteroidVisualizer__earthContainer">
        <img
          className="AsteroidVisualizer__earth"
          src={ earth }
          alt="Planeta Tierra"
          width="200"
        />
      </figure>
      {
        getNeos.map(asteroid => <AsteroidVisualizerItem
          key={ asteroid._id }
          name={ asteroid.name }
          handleClick={ handleClick }
          id={ asteroid._id }
        />)
      }
    </div>
  )
}

export const AsteroidVisualizer = fetchAsteroids(AsteroidVisualizerComponent)