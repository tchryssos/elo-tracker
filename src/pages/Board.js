import React from 'react'
import injectSheet from 'react-jss'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'

import Board from 'components/Board'

const styles = {
	boardPageContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		alignItems: 'center',
	},
	[MD_MIN_STRING]: {
		boardPageContainer: {
			flexDirection: 'row',
			justifyContent: 'space-around',
			height: '100%',
		},
	},
}

const Home = ({ classes }) => (
	<div className={classes.boardPageContainer}>
		<Board />
		<div>matchForm</div>
	</div>
)

export default injectSheet(styles)(Home)
