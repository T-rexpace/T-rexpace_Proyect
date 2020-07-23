import React from 'react'

import '../../scss/molecules/IconCard.scss'
import Arrow from '../icons/Arrow'
import ArrowUp from '../icons/ArrowUp'
import Close from '../icons/Close'
import Star from '../icons/Star'

const IconCard = (props) => {

  const componentToRender = () => {
    if (props.name === '<Arrow />') {
      return <Arrow />
    } else if (props.name === '<ArrowUp />') {
      return <ArrowUp />
    } else if (props.name === '<Close />') {
      return <Close />
    } else if (props.name === '<Star />') {
      return <Star />
    }
  }

  return(
    <article className="IconCard">
      <a href={props.link} download>
        <figure className="IconCard__iconContainer">
          {
            componentToRender()
          }
        </figure>
      </a>
      <p className="text-center mt-10">
        {props.name}
      </p>
    </article>
  )
}

export default IconCard