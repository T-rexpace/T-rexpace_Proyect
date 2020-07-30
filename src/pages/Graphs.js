import React from 'react'
import '../scss/pages/Graphs.scss'

import TableGraphData from '../components/organisms/TableGraphData'
import VelocityBarChart from '../components/graphs/VelocityBarChart'
import PerihelioPieChart from '../components/graphs/PerihelioPieChart'
import OrbitalPeriodLineChart from '../components/graphs/OrbitalPeriodLineChart'
import PerihelioDistanceRadarChart from '../components/graphs/PerihelioDistanceRadarChart'
import HazardousIndicatorCard from '../components/molecules/HazardousIndicatorCard'

import { URL_IMAGES, URL_IMAGES_REX } from '../components/atoms/UrlImages'

class Graphs extends React.Component {
  constructor() {
    super()
    this.state = {
      dataAsteroides: []
    }
  }

  render() {
    return(
      <div className="graphs">
        <figure className="text-right">
          <img 
            className="img-rex"
            src={`${URL_IMAGES_REX}t-rex-viendo-las-graficas.svg`} 
            alt="T-rex sonriendo, veamos las gráficas"
          />
        </figure>
  
        <section className="graphs__velocity">
          <div className="wraper">
            <div className="row">
              <div className=" column-10">
                <h2 className="title-hover">VELOCIDAD RELATIVA</h2>
              </div>
            </div>
            <div className="row">
              <div className="column-6 graphs-content">
                <VelocityBarChart />
              </div>
              <div className="column-4 graphs__velocity-detail">
                <p>
                  La velocidad relativa entre dos cuerpos 
                  es el valor de la velocidad de uno de 
                  ellos tal como la mediría un observador 
                  situado en el otro. La velocidad relativa 
                  de un cuerpo B respecto de un cuerpo A se desnota.
                  <a href="#">Leer más</a>
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="graphs__velocity mt-50">
          <div className="wraper">
            <div className="row">
              <div className="column-10">
                <h2 className="title-hover">PERIHELIO TIEMPO</h2>
              </div>
            </div>
            <div className="row">
              <div className="column-4 graphs-content">
                <PerihelioPieChart />
                <p>
                  Perihelio es el pinto más cercano de la órbita 
                  de un cuerpo celeste alrededor del sol. Es el 
                  opuesto al afelio 1 (punto más lejano) 2 y se representa.
                  <a href="#">Leer más</a>
                </p>
              </div>
              <div className="column-6 graphs__velocity-table">
                <TableGraphData />
              </div>
            </div>
          </div>
        </section>
  
        <section className="graphs__velocity mt-50">
          <div className="wraper">
            <div className="row">
              <div className=" column-10">
                <h2 className="title-hover">PERIODO ORBITAL</h2>
              </div>
            </div>
            <div className="row">
              <div className=" column-10">
                <p>
                  El periodo orbital es el tiempo que le toma a un astro 
                  recorrer su órbita. cuanto se trata de objetos que 
                  orbitaban alrededor del sol existente dos tipo.El periodo 
                  sideral y el periodo sinódico.
                  <a href="#">Leer más</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="column-5">
                <TableGraphData />
              </div>
              <div className="column-5 graphs__velocity-table graphs-content">
                <OrbitalPeriodLineChart />
              </div>
            </div>
          </div>
        </section>
  
        <section className="graphs__velocity mt-50">
          <div className="wraper">
            <div className="row">
              <div className=" column-10">
                <h2 className="title-hover">DISTANCIA DEL PERIHELIO</h2>
              </div>
            </div>
            <div className="row">
              <div className="column-5 graphs-content">
                <PerihelioDistanceRadarChart />
              </div>
              <div className="column-5 graphs__velocity-detail">
                <p>
                  Cuando un objeto gira alrededor de algo que no es el Sol, 
                  entonces no usamos los términos de perihelio y afelio. 
                  Los satélites que orbitan a la Tierra (¡incluyendo 
                  a la Luna!) tienen un punto cercano llamado perigeo.
                  <a href="#">Leer más</a>
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="graphs__hazardous mt-50">
          <div className="wraper">
            <div className="row">
              <div className=" column-10">
                <h2 className="title-hover">POTENCIALMENTE PELIGROSO</h2>
              </div>
            </div>
            <div className="row">
              <div className="column-10 graphs__hazardous-cards">
                <HazardousIndicatorCard data={[{name: 'asteroide'}]} peligroso={ true } />
                <HazardousIndicatorCard data={[{name: 'asteroide'}]} peligroso={ false } />
              </div>
            </div>
          </div>
        </section>
  
      </div>
    )
  }
}

export default Graphs