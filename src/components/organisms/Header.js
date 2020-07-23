import React from 'react'
import '../../scss/organisms/Header.scss'

import Logotipo from '../atoms/Logotipo'
import NavBar from '../molecules/NavBar'
import Button from '../atoms/Button'

const Header = () => {
    return (
        <header className="header">
            <div className="header__menu header-margin">
                <Logotipo />
                <NavBar />
            </div>
            <div className="header-margin">
                <Button type="normal" />
            </div>
        </header>
    )
}

export default Header