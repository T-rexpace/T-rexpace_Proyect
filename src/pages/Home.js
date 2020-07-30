import React, { Fragment, useState, useEffect } from 'react'

import ScrollDown from '../components/atoms/ScrollDown'
import ScrollUp from '../components/atoms/ScrollUp'
import { AsteroidsDetails } from '../components/organisms/AsteroidsDetails'
import HappyBirthday from '../components/organisms/HappyBirthday'
import Memorama from '../components/organisms/Memorama'
import DiscoveryAsteroid from '../components/organisms/DiscoveryAsteroid'
import '../scss/pages/Home.scss'

import { URL_IMAGES_REX, URL_IMAGES } from '../components/atoms/UrlImages'

const Home = () => {
  const [ShowUp, setShowUp] = useState(false)

  useEffect(function () {
    const onScroll = event => {
      const show = window.scrollY < window.innerHeight
      ShowUp != show && setShowUp(show)
    }

    document.addEventListener('scroll', onScroll)
  })

  return(
    <Fragment>
      <section className="Welcome" id="welcomeSection">
        { !ShowUp && <ScrollDown /> }
        <ScrollUp id="#welcomeSection" />
        <div className="wrapper">
          <div className="row">
            <div className="column-2">
              <figure className="Welcome__image-rexContainer">
                <img
                  src={ `${URL_IMAGES_REX}t-rex-comienza-el-recorrido.svg` }
                  className="Welcome__image-rex"
                  alt="Comienza el recorrido"
                  width="350"
                  />
              </figure>
            </div>
            <div className="column-4">
              <h1 className="h0">Descubramos<br />
                <span className="h2">el cosmos</span>
              </h1>
              <p>
                Acompáñame en este grandioso viaje donde aprenderemos 
                más sobre el cosmos
              </p>
            </div>
            <div className="column-6">
              <figure className="Welcome__image-capsuleContainer">
                <img
                  src={ `${URL_IMAGES}capsula-espacial.png`}
                  alt="Cápsula espacial"
                  width="1000"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <AsteroidsDetails id="asteroidDetails"/>
      <HappyBirthday />
      <Memorama />
      <DiscoveryAsteroid />
    </Fragment>
  )
}

export default Home