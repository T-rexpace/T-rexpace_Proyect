import React from 'react'
import '../../scss/molecules/RowGraphData.scss'

const RowGraphData = (props) => {
    return(
        <div className="rowGraphData">
            <div className="rowGraphData__position">
                <p>
                    <span>🟣‣ </span>
                    { props.position || 1 }
                </p>
            </div>
            <div className="rowGraphData__name">
                <p>
                    { props.name || "Asteroide_1"}
                </p>
            </div>
            <div className="rowGraphData__unit">
                <p>
                    { props.diameter_max || "245849.53" }
                </p>
            </div>
        </div>
    )
}

export default RowGraphData