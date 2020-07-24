import React, { Fragment } from 'react'
import Button from '../components/atoms/Button'
import '../scss/pages/Home.scss'

import tourBegins from '../images/icons/t-rex-comienza-el-recorrido.svg'
import selectAndAsteroid from '../images/icons/t-rex-seleccion-de-asteroides.svg'

const Home = () => {
  return(
    <Fragment>
      <section className="Welcome">
        <div className="wrapper">
          <div className="row">
            <div className="column-2">
              <figure className="Welcome__image-rexContainer">
                <img
                  src={ tourBegins }
                  className="Welcome__image-rex"
                  alt="Comienza el recorrido"/>
              </figure>
            </div>
            <div className="column-4">
              <h1 className="h0 mb-40">Near<br />
                <span className="h3">Earth Objects</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div className="column-6">
              <figure className="">
                <img
                  src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5926fd37-e60c-4ded-9631-121245351a94/spacex-693229.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200723T230846Z&X-Amz-Expires=86400&X-Amz-Signature=a08365382d97ea9903605eaa3a5fba537b284e6ce2f9c94daa9d0a8ad7cb2073&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22spacex-693229.png%22"
                  alt="Cápsula espacial"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="AsteroidsDetails">
        <div className="wrapper">
          <div className="row">
            <div className="column-6">
              <Button
                type="normal"
                title="Comparar"
              />
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
            </div>
            <div className="column-4">
              <div className="T-rexContainer text-center">
                <figure>
                  <img
                    src={ selectAndAsteroid }
                    alt="Dinosaurio te solicita escoger un asteroide"
                    width="310"
                  />
                </figure>
                <h2 className="text-uppercase">
                  Selecciona un <br/>
                  <span>asteroide</span>
                </h2>
                <p>para ver su información</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home