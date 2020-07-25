import React from 'react'

import '../../scss/organisms/AsteroidVisualizer.scss'

const AsteroidVisualizer = () => {
  return(
    <div className="AsteroidVisualizer">
      <figure className="AsteroidVisualizer__earthContainer">
        <img
          className="AsteroidVisualizer__earth"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8a17076c-e556-41a8-9980-f45c6e337959/earth.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200724T052238Z&X-Amz-Expires=86400&X-Amz-Signature=90f5d061e7849d463eadd25fdeba766f578f54cb69a5c1f0319f97d4e3f333cf&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22earth.png%22"
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