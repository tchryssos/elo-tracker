import React from 'react'
import injectSheet from 'react-jss'
import { paper, shadow, black } from 'constants/styles/colors'
import fakeData from 'constants/fakeData'
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

const RenderRows = ({ playerData }) => (
	playerData.map(
		(player) => {
			const { playerName, playerElo } = player
			return (
				<RankingTableRow playerName={playerName} playerElo={playerElo} />
			)
		},
	)
)

const Board = ({ classes }) => (
	<div className={classes.board}>
		<RankingTableRow playerName="player" playerElo="elo" className={classes.headerRow} />
		<RenderRows playerData={fakeData} />
	</div>
)

export default injectSheet(styles)(Board)
