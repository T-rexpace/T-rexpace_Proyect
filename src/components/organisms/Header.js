import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ModalSubscribe from '../molecules/ModalSubscribe'
import '../../scss/organisms/Header.scss'
import Logotipo from '../atoms/Logotipo'
import NavBar from '../molecules/NavBar'
import Button from '../atoms/Button'

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = event => {
    setModalIsOpen(true)
  }

  const handleCloseModal = event => {
    setModalIsOpen(false)
  }

  return (
    <header className="header">
      <div className="header__menu ml-30">
        <Link to="/home">
          <Logotipo />
        </Link>
        <NavBar />
      </div>
      <div className="mr-30">
        <Button
          onClick={ handleOpenModal }
          type="normal"
        />
        <ModalSubscribe
          onClose={ handleCloseModal }
          isOpen={ modalIsOpen }
        />
      </div>
    </header>
  )
}

export default Header