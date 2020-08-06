
const fetchByID = async id => {
  try {
    const dataNeos = await fetch('http://ec2-54-234-62-6.compute-1.amazonaws.com:8080/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: `{ getNeo(id: ${id}) { 
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

    const response = await dataNeos.json
    const res = response
    return res
    console.log(res)

  } catch( error ) {
    console.log('error: ', error)
  }
}
// (graphql(gql`
//   query {
//     getNeo(id: ${props}) {
//       _id,
//       name,
//       absolute_magnitude_h,
//       image,
//       is_potentially_hazardous_asteroid,
//       close_approach_data {
//         relative_velocity {
//           kilometers_per_hour
//         }
//       }
//       estimated_diameter {
//         kilometers {
//           estimated_diameter_min,
//           estimated_diameter_max
//         }
//       }
//       orbital_data {
//         first_observation_date,
//         last_observation_date,
//         orbital_period,
//         perihelion_distance
//       }
//     }
//   }
// `)
// )
export default fetchByID