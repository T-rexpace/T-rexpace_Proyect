import React, { Fragment } from 'react'
import '../scss/pages/Memorama.scss'

import Button from '../components/atoms/Button'
import PlayerDataTable from '../components/organisms/PlayerDataTable'
import CardMemorama from '../components/atoms/CardMemorama'

import TrexMemorama from '../images/t-rex/t-rex-memorama.svg'

const Memorama = () => {

  const getCardsMemorama = () => {
    return [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map( item => (
    <CardMemorama key={ item }/>
    ))
  }
  
  return(
    <Fragment>
      <section className="memorama__options">
        <div className="wrapper">
          <div className="row">
            <div className="column-6">
              <figure>
                <img 
                  src={ TrexMemorama } 
                  alt="t-rex bienvenido al juego" 
                />
              </figure>
            </div>
            <div className="column-6">
              <div className="row">
                <PlayerDataTable />
              </div>
              <div className="row">
                <Button type="normal" title="iniciar" />
                <Button type="normal" title="reiniciar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="memorama__timer">
        <div className="wraper">
          <div className="row">
            <div className="column-12 text-center">
              <h1>Time: 02: 31: 25</h1>
            </div>
          </div>
        </div>
      </section>
      
      <section className="memorama__cards">
        <div className="wraper">
          <div className="row">
            <div className="column-6">
              <div className="memorama__cards-grid">
                {
                  getCardsMemorama()
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Memorama