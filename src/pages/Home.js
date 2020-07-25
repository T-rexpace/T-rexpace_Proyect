import React, { Fragment, useRef, useEffect, useState } from 'react'
import Button from '../components/atoms/Button'
import '../scss/pages/Home.scss'
import AsteroidVisualizer from '../components/organisms/AsteroidVisualizer'

import tourBegins from '../images/icons/t-rex-comienza-el-recorrido.svg'
import selectAndAsteroid from '../images/icons/t-rex-seleccion-de-asteroides.svg'

const Home = () => {
  const AsteroidsDetails = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function() {
    const observer = new window.IntersectionObserver(function(entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    },
    {
      rootMargin: '0px',
    })
    observer.observe(AsteroidsDetails.current)
  }, [AsteroidsDetails])

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
      <section className="AsteroidsDetails" ref={ AsteroidsDetails }>
        {
          show && <div className="wrapper">
            <div className="row">
              <div className="column-6">
                <Button
                  type="normal--disabled"
                  title="Comparar"
                />
                <AsteroidVisualizer />
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
        }
      </section>
    </Fragment>
  )
}

export default Home