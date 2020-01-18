import React from 'react'
import { createUseStyles } from 'react-jss'

import H2 from 'components/H2'

import { black, yellow } from 'constants/styles/colors'
import { robotoBold } from 'constants/styles/fonts'

const useStyles = createUseStyles({
	formWrapper: {
		backgroundColor: yellow,
		border: `2px solid ${black}`,
		height: 'fit-content',
		padding: 32,
		width: '100%',
		marginBottom: 24,
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	titleWrapper: {
		textAlign: 'center',
	},
	submit: {
		maxWidth: '33%',
		width: '100%',
		marginTop: 16,
		alignSelf: 'center',
		border: `2px solid ${black}`,
		backgroundColor: yellow,
		...robotoBold,
		textTransform: 'uppercase',
		fontSize: 16,
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: black,
			color: yellow,
		},
	},
})

export default ({ onSubmit, children, title }) => {
	const classes = useStyles()
	return (
		<div className={classes.formWrapper}>
			<form onSubmit={onSubmit}>
				<div className={classes.form}>
					<div className={classes.titleWrapper}>
						<H2>{title}</H2>
					</div>
					{children}
					<input type="submit" className={classes.submit} />
				</div>
			</form>
		</div>
	)
}
