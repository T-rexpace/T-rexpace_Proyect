import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/pages/Colection.scss'

import Switch from '../components/atoms/Switch'
import OrderDropdown from '../components/molecules/OrderDropdown'
import AsteroidCard from '../components/molecules/AsteroidCard'
import Button from '../components/atoms/Button'
import Loader from '../components/atoms/Loader'

class Colection extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      error: null,
      page: 0,
      asteroids: [],
      forGraphs: [],
      newFilter: [],
      potentially_hazardous: false,
    }
  }
// Consulta para traer la data de las cards
  fetchNeos = async () => {
    this.setState({loading: true, error: null})

    try {
      const dataNeos = await fetch('http://ec2-54-234-62-6.compute-1.amazonaws.com:8080/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query: `{ getNeos(first: 6, skip:${this.state.page}) { 
            _id, 
            name, 
            absolute_magnitude_h, 
            image,
            is_potentially_hazardous_asteroid, 
            estimated_diameter { 
              kilometers { 
                estimated_diameter_min, 
                estimated_diameter_max
              } 
            }, 
            close_approach_data {
              close_approach_date,
              epoch_date_close_approach,
              relative_velocity {
                kilometers_per_hour
              },
              miss_distance {
                kilometers
              }
            },
            orbital_data {
              first_observation_date,
              last_observation_date
              orbital_period,
              perihelion_distance,
            } 
          } }`})
      })
        .then(r => r.json())
        .then(data => data.data.getNeos)
      
      this.setState({
        loading:false,
        error: null,
        page: this.state.page + 6,
        asteroids: [].concat(this.state.asteroids, dataNeos)
      })  
    } catch( error ) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }
  
  componentDidMount() {
    this.fetchNeos()
  }
// De la card seleccionada, toma el id del asteroide y la almacena en el estado, en el array forGraphs
  getID =(id) =>{
    !this.state.forGraphs.includes(id) &&
      this.setState({
        forGraphs: [].concat(this.state.forGraphs, id)
      })
  }
// Se recibe una lista y va a renderizar una card por cada elemento
// En cada card se envían el objeto asteroide, la funcion getID y el contador del estado de forGraphs
  renderList = (list) => {
    return list.map( asteroid => (
      <div
        className="column-4 cardsColection__cards-item"
        key={ asteroid._id }
      >
        <AsteroidCard 
          data={ asteroid } 
          getID={ this.getID }
          countIDForGraphs={ this.state.forGraphs.length } 
        />
      </div>
    ))
  }
// Dependiendo de si existe o no el filtro de peligro potencial, se envía una lista para renderizar las cards
  getCards = () => {
    if(this.state.potentially_hazardous) {
      const newList = this.state.asteroids.filter( asteroid => asteroid.is_potentially_hazardous_asteroid == true)
      return this.renderList(newList)
    }
    else{
      return this.renderList(this.state.asteroids)
    }
  }
// Almacena en localStorage el array de ID's para pasar a la pagina graphs y realizar otra consulta
  saveLocalStorage = () => {
    window.localStorage.setItem('ids',JSON.stringify(this.state.forGraphs))
  }
// Cambia el estado de potencialmente peligroso para aplicar el filtro
  handleHazardous = () => {
    this.state.potentially_hazardous
    ? this.setState({potentially_hazardous: false})
    : this.setState({potentially_hazardous: true})
  }
// Aplica el orden descendente de velocidad
  handleMoreVelocity = () => {
    const moreVelocity = this.state.asteroids.sort((a, b) => {
      return(
        b.close_approach_data.relative_velocity.kilometers_per_hour - a.close_approach_data.relative_velocity.kilometers_per_hour
      )
    })
    this.setState({
    newFilter: moreVelocity
    })
    return this.renderList(this.state.newFilter)
  }
// Aplica el orden ascendente de velocidad
  handlelessVelocity = () => {
    const lessVelocity = this.state.asteroids.sort((a, b) => {
      return(
        a.close_approach_data.relative_velocity.kilometers_per_hour - b.close_approach_data.relative_velocity.kilometers_per_hour
      )
    })
    this.setState({
    newFilter: lessVelocity
    })
    return this.renderList(this.state.newFilter)
  }
// Aplica el orden descendente de avistamiento
  handlemoreSighting = () => {
    const lessVelocity = this.state.asteroids.sort((a, b) => {
      return(
        new Date(b.orbital_data.last_observation_date) - new Date(a.orbital_data.last_observation_date)
      )
    })
    this.setState({
      newFilter: lessVelocity
    })
    return this.renderList(this.state.newFilter)
  }
// Aplica el orden ascendente de avistamiento
  handlelessSighting = () => {
    const lessVelocity = this.state.asteroids.sort((a, b) => {
      return(
        new Date(a.orbital_data.last_observation_date) - new Date(b.orbital_data.last_observation_date)
      )
    })
    this.setState({
      newFilter: lessVelocity
    })
    return this.renderList(this.state.newFilter)
  }
// Aplica el orden descendente de diametro
  handlemoreDiameter = () => {
    const lessVelocity = this.state.asteroids.sort((a, b) => {
      return(
        b.estimated_diameter.kilometers.estimated_diameter_max - a.estimated_diameter.kilometers.estimated_diameter_max
      )
    })
    this.setState({
      newFilter: lessVelocity
    })
    return this.renderList(this.state.newFilter)
  }
// Aplica el orden ascendente de diametro
  handlelessDiameter = () => {
    const lessVelocity = this.state.asteroids.sort((a, b) => {
      return(
        a.estimated_diameter.kilometers.estimated_diameter_min - b.estimated_diameter.kilometers.estimated_diameter_min
      )
    })
    this.setState({
      newFilter: lessVelocity
    })
    return this.renderList(this.state.newFilter)
  }

  render() {
    //------------------------ Error
    if(this.state.error) {
      return `Error: ${ this.state.error.message }`
    }

    return(
      <section className="cardsColection">
        <div className="wraper">
          <div className="row cardsColection__head">
            <div className="column-12">
              <h2 className="title-hover">Más de 150 Asteroides</h2>
              <h1 className="title-hover">Toda la serie</h1>
            </div>
          </div>
          <div className="row cardsColection__options">
            <div 
              className="column-6 cardsColection__options-switch">
              <p className="mr-30">
                Peligro potencial
              </p>
              <div>
                <Switch
                  turn={ this.handleHazardous }
                />
              </div>
            </div>
            <div className="column-6">
              <OrderDropdown 
              moreVelocity={ this.handleMoreVelocity }
              lessVelocity={ this.handlelessVelocity }
              moreSighting={ this.handlemoreSighting }
              lessSighting={ this.handlelessSighting }
              moreDiameter={ this.handlemoreDiameter }
              lessDiameter={ this.handlelessDiameter }
              />
            </div>
          </div>

          { //------------------------ logica cardsColection 
            this.state.asteroids.length &&
              <div className="row cardsColection__cards">
                { this.getCards() }
              </div>
          }

          { //------------------------ Loader
            this.state.loading &&
            <div className="text-center">
              <Loader />
            </div>
          }
          
          { //------------------------ Buttons para opciones de gráficas
            this.state.forGraphs.length == 5 &&
              <div className="row" id="optionGraphs">
                <div 
                  className="column-5 text-center"
                  onClick={() => this.setState({
                    forGraphs: []
                  })}
                >
                  <Button 
                    type="normal"
                    title="Cancelar"
                  />
                </div>
                <div 
                  className="column-5 text-center"
                  onClick={ () => this.saveLocalStorage() }
                >
                  <Link to="/graphs">
                    <Button 
                      type="normal"
                      title="ir a las gráficas"
                    />
                  </Link>
                </div>
              </div>
          }
          
          { //------------------------ Button traer más
            (!this.state.loading && !this.state.potentially_hazardous) &&
              <div className="row">
                <div className="column-12 text-center">
                  <div onClick={() => this.fetchNeos()}>
                    <Button 
                      type="normal"
                      title="ver más"
                    />
                  </div>
                </div>
              </div>
          }

        </div>
      </section>
    )
  }
}

export default Colection