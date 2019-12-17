import React, { useState } from 'react'
import axios from 'axios'

import { API_URL, CREATE } from 'constants/api'

import Form from 'components/Form'

const freshForm = {
	name: '',
}


const NewPlayerForm = ({ getPlayers }) => {
	const [formState, setFormState] = useState(freshForm)

	const onSubmit = async (e) => {
		e.preventDefault()
		const createUrl = `${API_URL}/${CREATE}`
		if (formState.name) {
			await axios.post(createUrl, formState)
			getPlayers()
			setFormState(freshForm)
		}
	}

	const onChange = (e) => {
		e.preventDefault()
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<Form title="New Player" onSubmit={onSubmit}>
			<p>Name:</p>
			<input
				type="text"
				name="name"
				onChange={onChange}
				value={formState.name}
				required
			/>
		</Form>
	)
}

export default NewPlayerForm
