import React from 'react'
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
      asteroids: []
    }
  }

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

  getCards = () => {
    return this.state.asteroids.map( item => (
      <div
        className="column-4 cardsColection__cards-item"
        key={ item._id }
      >
        <AsteroidCard data={ item } />
      </div>
    ))
  }

  render() {
    console.log('state', this.state)

    //------------------------ Error
    if(this.state.error) {
      return `Error: ${ this.state.error.message }`
    }

    return(
      <section className="cardsColection">
        <div className="wraper">
          <div className="row cardsColection__head">
            <div className="column-12">
              <h2>Más de 200 asteroides</h2>
              <h1>Toda la serie</h1>
            </div>
          </div>
          <div className="row cardsColection__options">
            <div className="column-6 cardsColection__options-switch">
              <p className="mr-30">
                Peligro potencial
              </p>
              <Switch />
            </div>
            <div className="column-6">
              <OrderDropdown />
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

          { //------------------------ Button traer más
            !this.state.loading &&
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