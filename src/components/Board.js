import React from 'react'
import injectSheet from 'react-jss'
import { paper, shadow } from 'constants/styles/colors'

const styles = {
	board: {
		display: 'flex',
		width: '100%',
		flexDirection: 'column',
		backgroundColor: paper,
		boxShadow: [[1, 1, 2, 2, shadow]],
	},
}

const Board = ({ classes }) => (
	<div className={classes.board}>
		row
	</div>
)

export default injectSheet(styles)(Board)
