import React from 'react'
import injectSheet from 'react-jss'

import H2 from 'components/H2'

import { paper, shadow } from 'constants/styles/colors'

const styles = {
	formWrapper: {
		backgroundColor: paper,
		boxShadow: [[1, 1, 2, 2, shadow]],
		height: 'fit-content',
		padding: 16,
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
		alignSelf: 'flex-end',
	},
}

const Form = ({ onSubmit, children, title, classes }) => (
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

export default injectSheet(styles)(Form)
