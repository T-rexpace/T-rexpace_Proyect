import React from 'react'
import '../scss/pages/Home.scss'

import Recorrido from '../images/icons/t-rex-recorrido.svg'

const Home = () => {
    return(
        <div className="HomeBackground">
            <div className="wrapper">
                <div className="row mt-50 HomeBackground__recorrido">
                    <div className="column-6">
                        <h1>Near</h1>
                        <h2>Earth Objects</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <figure>
                            <img 
                                src={ Recorrido } 
                                className="HomeBackground__recorrido-rex"
                                alt="Recorrido"/>
                        </figure>
                    </div>
                    <div className="column-6">
                        <figure>
                            <img 
                                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5926fd37-e60c-4ded-9631-121245351a94/spacex-693229.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200723T230846Z&X-Amz-Expires=86400&X-Amz-Signature=a08365382d97ea9903605eaa3a5fba537b284e6ce2f9c94daa9d0a8ad7cb2073&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22spacex-693229.png%22" 
                                alt="capsule"
                            />
                        </figure>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home