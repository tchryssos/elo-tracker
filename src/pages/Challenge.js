import React, { useState, useEffect } from 'react'
import injectSheet from 'react-jss'
import axios from 'axios'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { API_URL, PLAYER_LIST } from 'constants/api'

import RankingTable from 'components/RankingTable'
import H1 from 'components/H1'
import MatchForm from 'components/MatchForm'

const wrapperStyles = {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
}

const styles = {
	boardPageContainer: {
		...wrapperStyles,
		height: '100%',
	},
	boardAndForm: {
		...wrapperStyles,
	},
	header: {
		width: '100%',
		textAlign: 'center',
		textTransform: 'uppercase',
		marginBottom: 16,
	},
	[MD_MIN_STRING]: {
		boardAndForm: {
			flexDirection: 'row',
			justifyContent: 'space-around',
			height: '100%',
		},
	},
}

const Challenge = ({ classes }) => {
	const [players, setPlayers] = useState([])

	const getPlayers = async () => {
		const playerUrl = `${API_URL}/${PLAYER_LIST}`
		const res = await axios.get(playerUrl)
		setPlayers(res.data)
	}

	useEffect(() => {
		getPlayers()
	}, [])

	return (
		<div className={classes.boardPageContainer}>
			<H1 text="Quadio Smash" className={classes.header} />
			<div className={classes.boardAndForm}>
				<RankingTable players={players} />
				<MatchForm players={players} getPlayers={getPlayers} />
			</div>
		</div>
	)
}

export default injectSheet(styles)(Challenge)
