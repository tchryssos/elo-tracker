import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import { black, yellow } from 'constants/styles/colors'
import { robotoBold } from 'constants/styles/fonts'

const useStyles = createUseStyles({
	row: {
		display: 'flex',
		marginBottom: 5,
		width: '100%',
	},
	rankBox: {
		padding: 4,
		width: '15%',
		border: [[2, 'solid', black]],
		borderRight: 0,
	},
	playerNameContainer: {
		padding: 4,
		paddingLeft: 8,
		width: '60%',
		border: [[2, 'solid', black]],
		borderRight: 0,
		...robotoBold,
	},
	playerEloContainer: {
		padding: 4,
		paddingLeft: 8,
		width: '25%',
		border: [[2, 'solid', black]],
	},
	podiumBorder: {
		borderLeft: [[2, 'solid', yellow]],
	},
})

export default ({ name, rank, elo, className }) => {
	const classes = useStyles()
	return (
		<div className={clsx(classes.row, className)}>
			<div className={classes.rankBox}>
				{rank}
			</div>
			<div className={clsx(
				{ [classes.podiumBorder]: rank <= 3 },
				classes.playerNameContainer,
			)}
			>
				{name}
			</div>
			<div className={clsx(
				{ [classes.podiumBorder]: rank <= 3 },
				classes.playerEloContainer,
			)}
			>
				{elo}
			</div>
		</div>
	)
}
