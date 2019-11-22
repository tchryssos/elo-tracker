import React from 'react'
import injectSheet from 'react-jss'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'

import Board from 'components/Board'

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

const Challenge = ({ classes }) => (
	<div className={classes.boardPageContainer}>
		<h1 className={classes.header}>
			Quadio Smash
		</h1>
		<div className={classes.boardAndForm}>
			<Board />
			<div>matchForm</div>
		</div>
	</div>
)

export default injectSheet(styles)(Challenge)
