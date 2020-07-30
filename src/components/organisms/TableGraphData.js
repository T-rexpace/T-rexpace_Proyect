import React from 'react'
import '../../scss/organisms/TableGraphData.scss'

import RowGraphData from '../molecules/RowGraphData'

const TableGraphData = () => {
	return (
		<div className="tableGraphData text-right">
			<div className="tableGraphData__subtitle">
				<p>#</p>
				<p>Nombre</p>
				<p>Tiempo</p>
			</div>
			<RowGraphData />
			<RowGraphData />
			<RowGraphData />
			<RowGraphData />
			<RowGraphData />
	</div>
	)
}

export default TableGraphData