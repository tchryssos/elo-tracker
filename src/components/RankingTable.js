import React from 'react'
import injectSheet from 'react-jss'
import { paper, shadow, black } from 'constants/styles/colors'
import RankingTableRow from 'components/RankingTableRow'

const styles = {
	board: {
		display: 'flex',
		width: '100%',
		maxWidth: 500,
		flexDirection: 'column',
		backgroundColor: paper,
		boxShadow: [[1, 1, 2, 2, shadow]],
		border: [[1, 'solid', black]],
		height: 'fit-content',
	},
	headerRow: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		textAlign: 'center',
	},
}

const RenderRows = ({ players }) => (
	players.map(
		(player) => {
			const { name, rank, elo } = player
			return (
				<RankingTableRow
					name={name}
					rank={rank}
					elo={elo}
				/>
			)
		},
	)
)

const Board = ({ players, classes }) => (
	<div className={classes.board}>
		<RankingTableRow playerName="player" playerElo="elo" className={classes.headerRow} />
		<RenderRows players={players} />
	</div>
)

export default injectSheet(styles)(Board)
