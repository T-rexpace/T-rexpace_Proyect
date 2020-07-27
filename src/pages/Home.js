import React, { Fragment } from 'react'

import '../scss/pages/Home.scss'
import AsteroidsDetails from '../components/organisms/AsteroidsDetails'
import HappyBirthday from '../components/organisms/HappyBirthday'
import Memorama from '../components/organisms/Memorama'
import DiscoveryAsteroid from '../components/organisms/DiscoveryAsteroid'

import tourBegins from '../images/icons/t-rex-comienza-el-recorrido.svg'

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
                  alt="Comienza el recorrido"
                  width="350"
                  />
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
              <figure className="Welcome__image-capsuleContainer">
                <img
                  src="../../images/capsula-espacial.png"
                  alt="Cápsula espacial"
                  width="1000"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <AsteroidsDetails />
      <HappyBirthday />
      <Memorama />
      <DiscoveryAsteroid />
    </Fragment>
  )
}

export default Home