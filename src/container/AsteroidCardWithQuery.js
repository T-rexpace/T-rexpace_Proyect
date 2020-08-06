import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import AsteroidCard from '../components/molecules/AsteroidCard'
import Loader from '../components/atoms/Loader'

const GET_ASTEROID = gql`
  query($id: ID!) {
    getNeo(id: $id) {
      _id,
      name,
      absolute_magnitude_h,
      image,
      is_potentially_hazardous_asteroid,
      close_approach_data {
        relative_velocity {
          kilometers_per_hour
        }
      }
      estimated_diameter {
        kilometers {
          estimated_diameter_min,
          estimated_diameter_max
        }
      }
      orbital_data {
        first_observation_date,
        last_observation_date,
        orbital_period,
        perihelion_distance
      }
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loader />
  if (error) {
    console.log(error)
    return <p>Tuvimos un error buscando tu asteroide. Recarga de nuevo la página y vuelve a intentar.</p>
  }
    return <AsteroidCard data={ data }/>
}

const AsteroidCardWithQuery = ({ id }) => (
  <Query query={GET_ASTEROID} variables={{ id }}>
    {renderProp}
  </Query>
)

export default AsteroidCardWithQuery