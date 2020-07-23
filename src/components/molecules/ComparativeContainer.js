import React, { Fragment, useState } from 'react'
import '../../scss/molecules/ComparativeContainer.scss'
import Button from '../atoms/Button'


const ComparativeContainer = () => {
    
    const [ counter, setCounter ] = useState(0)
    const handleCancelClick = () => setCounter(0)
    const handleCompareClick = () => alert(`${counter} Elementos seleccionados. Vamonos a las gráficas`)

    return(
        <Fragment>
            <div className="comparative">
                <h3>Asteroides a comparar ({ counter }), máximo 5.</h3>
                { counter == 0 &&
                    <Fragment>
                        <Button type="normal--disabled" title="Comparar" />
                        <Button type="normal--disabled"><span>Cancelar</span></Button>
                    </Fragment>
                }
                { counter == 1 &&
                    <Fragment>
                        <Button type="normal--disabled" title="Comparar" />
                        <Button type="normal"><span onClick={ handleCancelClick } >Cancelar</span></Button>
                    </Fragment>
                }
                { counter > 1 &&
                    <Fragment>
                        <Button type="normal"><span onClick={ handleCompareClick }>Comparar</span></Button>
                        <Button type="normal"><span onClick={ handleCancelClick } >Cancelar</span></Button>
                    </Fragment>
                }
            </div>
            { counter < 5 &&
                <button onClick={ () => setCounter(counter + 1) } >seleccionar</button>
            }
        </Fragment>
    )
}

export default ComparativeContainer