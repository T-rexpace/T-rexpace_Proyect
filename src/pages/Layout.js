import React from 'react'
import '../scss/pages/Layout.scss'
import '../scss/foundations/_fonts.scss'

import Header from '../components/organisms/Header'
import Footer from '../components/molecules/Footer'

const Layout = (props) => {
    return(
        <div className="layout">
            <Header />
            <div className="layout__content">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout