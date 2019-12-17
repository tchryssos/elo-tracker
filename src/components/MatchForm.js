import React, { useState } from 'react'
import axios from 'axios'


import { API_URL, UPDATE_ELO } from 'constants/api'

import PlayerSelect from 'components/PlayerSelect'
import Form from 'components/Form'

const MatchForm = ({ players, getPlayers }) => {
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
		await axios.post(updateUrl, formState)
		getPlayers()
	}

	return (
		<Form onSubmit={onSubmit} title="Match Form">
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
		</Form>
	)
}

export default MatchForm
