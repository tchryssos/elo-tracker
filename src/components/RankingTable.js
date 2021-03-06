import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import { black, yellow, white } from 'constants/styles/colors'
import { robotoBold } from 'constants/styles/fonts'
import { contentMaxWidth } from 'constants/styles/content'
import RankingTableRow from 'components/RankingTableRow'

const useStyles = createUseStyles({
	board: {
		display: 'flex',
		width: '100%',
		maxWidth: contentMaxWidth,
		flexDirection: 'column',
		backgroundColor: yellow,
		height: 'fit-content',
		marginBottom: 50,
	},
	headerRow: {
		fontWeight: 'bold',
		textAlign: 'left',
		'& div': {
			border: 0,
			paddingTop: 0,
		},
	},
	podiumRow: {
		backgroundColor: black,
		color: white,
		border: 'none',
	},
	starDivider: {
		textAlign: 'center',
		...robotoBold,
		color: black,
		lineHeight: 0.9,
		fontSize: 50,
	},
})

const RenderRows = ({ players, classes }) => (
	players.map(
		(player) => {
			const { name, rank, elo } = player
			return (
				<RankingTableRow
					className={clsx(
						{ [classes.podiumRow]: rank <= 3 },
					)}
					name={name}
					rank={rank}
					elo={elo}
				/>
			)
		},
	)
)

const Rows = ({ players, classes }) => {
	if (players && players.length) {
		return (
			<>
				<RenderRows players={players.slice(0, 3)} classes={classes} />
				<p className={classes.starDivider}>***</p>
				<RenderRows players={players.slice(3)} classes={classes} />
			</>
		)
	}
	return null
}

export default ({ players }) => {
	const classes = useStyles()
	return (
		<div className={classes.board}>
			<RankingTableRow
				rank="Rank"
				name="Player"
				elo="ELO Score"
				className={classes.headerRow}
			/>
			<Rows players={players} classes={classes} />
		</div>
	)
}
