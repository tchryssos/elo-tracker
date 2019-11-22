import React from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const styles = {
	header: {
		fontSize: 24,
	},
	[MD_MIN_STRING]: {
		header: {
			fontSize: 36,
		},
	},
}

const H1 = ({ text, className, classes }) => (
	<h1 className={(clsx(classes.header, className))}>
		{text}
	</h1>
)

export default injectSheet(styles)(H1)
