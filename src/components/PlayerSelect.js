import React from 'react'
import { createUseStyles } from 'react-jss'

import { black } from 'constants/styles/colors'

const useStyles = createUseStyles({
	playerSelect: {
		marginBottom: 15,
		border: `2px solid ${black}`,
		borderRadius: 0,
		fontSize: 12,
		padding: 8,
	},
})

const PlayerOption = ({ player }) => (
	<option value={player.id}>
		{player.name}
	</option>
)

export default ({ players, fieldName, onChange }) => {
	const classes = useStyles()

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
