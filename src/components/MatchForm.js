import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import axios from 'axios'


import { API_URL, UPDATE_ELO } from 'constants/api'

import PlayerSelect from 'components/PlayerSelect'
import Form from 'components/Form'
import { robotoBold } from 'constants/styles/fonts'

const useStyles = createUseStyles({
	formTitle: {
		textTransform: 'uppercase',
		...robotoBold,
		marginBottom: 4,
	},
})

export default ({ players, getPlayers }) => {
	const classes = useStyles()
	const [formState, setFormState] = useState({
		winner: undefined,
		loser: undefined,
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
		if (formState.winner && formState.loser) {
			await axios.post(updateUrl, formState)
			getPlayers()
		}
	}

	return (
		<Form onSubmit={onSubmit} title="Log a Match">
			<p className={classes.formTitle} >Winner</p>
			<PlayerSelect
				fieldName="winner"
				players={players}
				onChange={onChange}
			/>
			<p className={classes.formTitle}>Loser</p>
			<PlayerSelect
				fieldName="loser"
				players={players}
				onChange={onChange}
			/>
		</Form>
	)
}
