import React from 'react'
import '../../scss/molecules/PlayerData.scss'

const PlayerData = (props) => {
    return(
        <div className="playerData">
            <div className="playerData__position">
                <p>
                    <span>⭐ </span>
                    { props.position || 1 }
                </p>
            </div>
            <div className="playerData__nikname">
                <p>
                    { props.nickname || "NickName_1"}
                </p>
            </div>
            <div className="playerData__score">
                <p>
                    { props.score || "00:12:47" }
                </p>
            </div>
        </div>
    )
}

export default PlayerData