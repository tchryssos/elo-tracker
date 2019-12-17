import React from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const styles = {
	header: {
		fontSize: 18,
	},
	[MD_MIN_STRING]: {
		header: {
			fontSize: 24,
		},
	},
}

const H1 = ({ children, className, classes }) => (
	<h2 className={(clsx(classes.header, className))}>
		{children}
	</h2>
)

export default injectSheet(styles)(H1)
