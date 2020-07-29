import React from 'react'
import '../../scss/organisms/PlayerDataTable.scss'

import PlayerData from '../molecules/PlayerData'

const PlayerDataTable = () => {
  return(
    <div className="playerDataTable">
      <h3 className="text-uppercase text-center">
        primeros lugares
      </h3>
      <div className="playerDataTable__subtitle">
        <p>Posición</p>
        <p>Name</p>
        <p>Score</p>
      </div>
      <PlayerData className="mb-50" />
      <PlayerData />
      <PlayerData />
      <PlayerData />
      <PlayerData />
    </div>
  )
}

export default PlayerDataTable