import React, { Fragment } from 'react'

import '../../scss/molecules/HeaderDesignSystem.scss'

const HeaderDesignSystem = (props) => (
  <Fragment>
    <header className="HeaderDesignSystem text-right">
      <h1>{ props.title }</h1>
    </header>
  </Fragment>
)

export default HeaderDesignSystem