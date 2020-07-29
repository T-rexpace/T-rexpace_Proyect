import React from 'react'
import '../scss/pages/Colection.scss'

import AsteroidCard from '../components/molecules/AsteroidCard'
import Button from '../components/atoms/Button'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const getAsteroids = graphql(gql`
{ getNeos (first: 4) { 
  _id, 
  name, 
  absolute_magnitude_h, 
  image,
  is_potentially_hazardous_asteroid,
  close_approach_data {
    relative_velocity {
      kilometers_per_hour
    }
  },
  estimated_diameter { 
    kilometers { 
      estimated_diameter_min, 
      estimated_diameter_max
    } 
  },
  orbital_data {
    first_observation_date,
    last_observation_date
    orbital_period,
    perihelion_distance,
  } 
} }
`)

const ColectionList = ({data: { getNeos = [] } }) => {
  // console.log(props)
  return getNeos.map( neo => (
    <div 
      className="column-4 cardsColection__cards-item"
      key={ neo._id }
    >
      <AsteroidCard data={ neo } />
    </div>
  ))
}

export const Colection2 = getAsteroids(ColectionList)