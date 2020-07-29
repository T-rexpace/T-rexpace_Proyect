import React, { createContext, useState } from 'react'
const Context = createContext()

const Provider = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false)

  const value = {
    isSelected,
    activateSelected: () => {
      setIsSelected(true)
    }
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}