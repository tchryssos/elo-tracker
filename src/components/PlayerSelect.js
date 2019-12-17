import React from 'react'
import injectSheet from 'react-jss'

const styles = {

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
				-Choose a player-
			</option>
			{sortedPlayers.map(
				player => <PlayerOption player={player} classes={classes} />,
			)}
		</select>
	)
}

export default injectSheet(styles)(PlayerSelect)
