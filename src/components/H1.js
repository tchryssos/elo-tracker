import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	header: {
		fontSize: 24,
	},
	[MD_MIN_STRING]: {
		header: {
			fontSize: 36,
		},
	},
})

export default ({ children, className }) => {
	const classes = useStyles()
	return (
		<h1 className={(clsx(classes.header, className))}>
			{children}
		</h1>
	)
}
