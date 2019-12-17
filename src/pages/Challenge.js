import React, { useState, useEffect } from 'react'
import injectSheet from 'react-jss'
import axios from 'axios'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { API_URL, PLAYER_LIST } from 'constants/api'
import { contentMaxWidth } from 'constants/styles/content'

import RankingTable from 'components/RankingTable'
import H1 from 'components/H1'
import MatchForm from 'components/MatchForm'
import NewPlayerForm from 'components/NewPlayerForm'
import Falcon from 'static/falcon.png'

const wrapperStyles = {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
}

const styles = {
	background: {
		background: `no-repeat center/200% url(${Falcon})`,
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		zIndex: -1,
		opacity: 0.2,
	},
	boardPageContainer: {
		...wrapperStyles,
		height: '100%',
	},
	boardAndForm: {
		...wrapperStyles,
		alignItems: 'center',
	},
	header: {
		width: '100%',
		textAlign: 'center',
		textTransform: 'uppercase',
		margin: [[16, 0]],
	},
	formStack: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		maxWidth: contentMaxWidth,
	},
	[MD_MIN_STRING]: {
		boardAndForm: {
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			height: '100%',
			alignItems: 'flex-start',
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
		<>
			<div className={classes.background} />
			<div className={classes.boardPageContainer}>
				<H1 className={classes.header}>QUADIO SMASH</H1>
				<div className={classes.boardAndForm}>
					<RankingTable players={players} />
					<div className={classes.formStack}>
						<MatchForm players={players} getPlayers={getPlayers} />
						<NewPlayerForm getPlayers={getPlayers} />
					</div>
				</div>
			</div>
		</>
	)
}

export default injectSheet(styles)(Challenge)
