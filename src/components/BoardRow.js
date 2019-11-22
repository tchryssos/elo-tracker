import React from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'

import { black } from 'constants/styles/colors'

const styles = {
	row: {
		display: 'flex',
		borderBottom: [[1, 'solid', black]],
		width: '100%',
	},
	playerNameContainer: {
		width: '70%',
		marginLeft: 8,
		borderRight: [[1, 'solid', black]],
	},
	playerEloContainer: {
		width: '30%',
		marginLeft: 8,
	},
}

const BoardRow = ({ playerName, playerElo, className, classes }) => (
	<div className={clsx(classes.row, className)}>
		<div className={classes.playerNameContainer}>
			{playerName}
		</div>
		<div className={classes.playerEloContainer}>
			{playerElo}
		</div>
	</div>
)

export default injectSheet(styles)(BoardRow)
