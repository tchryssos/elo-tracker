import React from 'react'
import injectSheet from 'react-jss'

import { black } from 'constants/styles/colors'

const styles = {
	playerSelect: {
		marginBottom: 15,
		border: `2px solid ${black}`,
		borderRadius: 0,
		fontSize: 12,
		padding: 8,
	},
}

const PlayerOption = ({ player, classes }) => (
	<option value={player.id}>
		{player.name}
	</option>
)

const PlayerSelect = ({ players, fieldName, onChange, classes }) => {
	const sortedPlayers = players.sort((p1, p2) => (
		p1.name.localeCompare(p2.name)
	))

	return (
		<select
			name={fieldName}
			onChange={onChange}
			className={classes.playerSelect}
		>
			<option disabled selected value>
				Choose a player
			</option>
			{sortedPlayers.map(
				player => <PlayerOption player={player} classes={classes} />,
			)}
		</select>
	)
}

export default injectSheet(styles)(PlayerSelect)
