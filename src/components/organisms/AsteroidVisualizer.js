import React from 'react'

import '../../scss/organisms/AsteroidVisualizer.scss'
import earth from '../../images/planeta-tierra.png'

const AsteroidVisualizer = () => {
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
      <div className="AsteroidVisualizer__item first">
        <span className="text-uppercase">Name</span>
        <div className="AsteroidVisualizer__dot">
          <div className="wave"></div>
        </div>
      </div>
      <div className="AsteroidVisualizer__item second">
        <span className="text-uppercase">Name</span>
        <div className="AsteroidVisualizer__dot">
          <div className="wave"></div>
        </div>
      </div>
      <div className="AsteroidVisualizer__item third">
        <span className="text-uppercase">Name</span>
        <div className="AsteroidVisualizer__dot">
          <div className="wave"></div>
        </div>
      </div>
      <div className="AsteroidVisualizer__item fourth">
        <span className="text-uppercase">Name</span>
        <div className="AsteroidVisualizer__dot">
          <div className="wave"></div>
        </div>
      </div>
      <div className="AsteroidVisualizer__item fifth">
        <span className="text-uppercase">Name</span>
        <div className="AsteroidVisualizer__dot">
          <div className="wave"></div>
        </div>
      </div>
      <div className="AsteroidVisualizer__item sixth">
        <span className="text-uppercase">Name</span>
        <div className="AsteroidVisualizer__dot">
          <div className="wave"></div>
        </div>
      </div>
    </div>
  )
}

export default AsteroidVisualizer