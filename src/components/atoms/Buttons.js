import React from 'react'
import '../../scss/atoms/Buttons.scss'
import Button from './Button'

const Buttons = () => {
    return(
        <div className="container__buttons">

            <section className="container__buttons-normal">
                <h2>Normal</h2>
                <Button type="normal" /> 
                <Button type="outline" />
            </section>

            <section className="container__buttons-active">
                <h2>Active</h2>
                <Button type="normal--active" /> 
                <Button type="outline--active" />
            </section>

            <section className="container__buttons-disabled">
                <h2>Disabled</h2>
                <Button type="normal--disabled" /> 
                <Button type="outline--disabled" />
            </section>

            <section className="container__buttons-facebook">
                <h2>Facebook</h2>
                <Button type="facebook" title="Compartir" />
            </section>

        </div>
    )
}

export default Buttons