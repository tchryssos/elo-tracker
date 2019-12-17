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
		display: 'flex',
		justifyContent: 'center',
		width: '12%',
		borderRight: [[1, 'solid', black]],
	},
	playerNameContainer: {
		width: '60%',
		marginLeft: 8,
		borderRight: [[1, 'solid', black]],
	},
	playerEloContainer: {
		width: '28%',
		marginLeft: 8,
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
