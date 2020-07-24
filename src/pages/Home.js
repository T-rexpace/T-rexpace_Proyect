import React, { Fragment } from 'react'
import '../scss/pages/Home.scss'

import Recorrido from '../images/icons/t-rex-comienza-el-recorrido.svg'

const Home = () => {
  return(
    <Fragment>
      <section className="Welcome">
        <div className="wrapper">
          <div className="row">
            <div className="column-2">
              <figure className="Welcome__image-rexContainer">
                <img
                  src={ Recorrido }
                  className="Welcome__image-rex"
                  alt="Recorrido"/>
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
                  alt="capsule"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home