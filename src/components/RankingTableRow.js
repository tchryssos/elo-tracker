import React from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'

import { black } from 'constants/styles/colors'

const styles = {
	row: {
		display: 'flex',
		borderBottom: [[1, 'solid', black]],
		width: '100%',
		'&:last-child': {
			borderBottom: 'none',
		},
	},
	rankBox: {
		padding: 4,
		textAlign: 'center',
		width: '15%',
		borderRight: [[1, 'solid', black]],
	},
	playerNameContainer: {
		padding: 4,
		paddingLeft: 8,
		width: '60%',
		borderRight: [[1, 'solid', black]],
	},
	playerEloContainer: {
		padding: 4,
		paddingLeft: 8,
		width: '25%',
	},
}

const BoardRow = ({ name, rank, elo, className, classes }) => (
	<div className={clsx(classes.row, className)}>
		<div className={classes.rankBox}>
			{rank}
		</div>
		<div className={classes.playerNameContainer}>
			{name}
		</div>
		<div className={classes.playerEloContainer}>
			{elo}
		</div>
	</div>
)

export default injectSheet(styles)(BoardRow)
