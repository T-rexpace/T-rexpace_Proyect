import React from 'react'

import Sidebar from './Sidebar'
import '../../scss/organisms/Layout.scss'

const Layout = (props) => {
  return (
    <>
      <div className="Layout">
        <Sidebar />
        <div className="DesignSystemHome">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Layout