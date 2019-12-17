import React, { useState } from 'react'
import injectSheet from 'react-jss'

import { API_URL, UPDATE_ELO } from 'constants/api'
import { paper, shadow, black } from 'constants/styles/colors'
import { contentMaxWidth } from 'constants/styles/content'

import PlayerSelect from 'components/PlayerSelect'

const styles = {
	formWrapper: {
		backgroundColor: paper,
		boxShadow: [[1, 1, 2, 2, shadow]],
		height: 'fit-content',
		padding: 16,
		width: '100%',
		maxWidth: contentMaxWidth,
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
	},
}

const MatchForm = ({ players, classes }) => {
	const [formState, setFormState] = useState({
		winner: '',
		loser: '',
	})

	const onChange = (e) => {
		e.preventDefault()
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		})
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		const updateUrl = `${API_URL}/${UPDATE_ELO}`
		const res = await fetch(updateUrl, {
			method: 'POST',
			body: JSON.stringify(formState),
		})
		console.log(res)
	}

	return (
		<div className={classes.formWrapper}>
			<form onSubmit={onSubmit}>
				<div className={classes.form}>
					<p>Winner:</p>
					<PlayerSelect
						fieldName="winner"
						players={players}
						onChange={onChange}
					/>
					<p>Loser:</p>
					<PlayerSelect
						fieldName="loser"
						players={players}
						onChange={onChange}
					/>
				</div>
			</form>
		</div>
	)
}

export default injectSheet(styles)(MatchForm)
