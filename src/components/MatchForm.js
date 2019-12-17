import React from 'react'
import injectSheet from 'react-jss'

import { paper, shadow, black } from 'constants/styles/colors'

const styles = {
	formWrapper: {
		backgroundColor: paper,
		boxShadow: [[1, 1, 2, 2, shadow]],
	},
}

const MatchForm = ({ classes }) => {

	return (
		<div className={classes.formWrapper}>

		</div>
	)
}

export default injectSheet(styles)(MatchForm)
