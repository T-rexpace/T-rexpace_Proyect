import React from 'react'
import '../scss/pages/Layout.scss'
import '../scss/foundations/_fonts.scss'

import Header from '../components/organisms/Header'
import Footer from '../components/molecules/Footer'

const Layout = (props) => {
  return(
    <div className="Layout">
      <Header />
      <div className="Layout__content">
          { props.children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout