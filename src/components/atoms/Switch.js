import React from 'react'

import '../../scss/atoms/Switch.scss'

const Switch = (props) => {
    const turnSwitch = () => {
        const switchBox = document.getElementById('switchBox')
        switchBox.classList.toggle('switch__box--active')
    }

    return(
        <div className={ props.active 
            ? 'switch__box--active'
            : 'switch__box'
            } 
            id="switchBox">
            <div 
                className="switch__circle"
                onClick={ turnSwitch }
            />
        </div>
    )
}

export default Switch