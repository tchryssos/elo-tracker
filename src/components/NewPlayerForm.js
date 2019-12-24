import React, { useState } from 'react'
import injectSheet from 'react-jss'
import axios from 'axios'

import { API_URL, CREATE } from 'constants/api'

import Form from 'components/Form'

import { robotoBold } from 'constants/styles/fonts'
import { yellow, white, black } from 'constants/styles/colors'

const styles = {
	formTitle: {
		textTransform: 'uppercase',
		...robotoBold,
	},
	nameInput: {
		border: `2px solid ${black}`,
		fontSize: 12,
		padding: 8,
		backgroundColor: yellow,
		'&:focus': {
			outline: 'none',
			backgroundColor: white,
		},
	},
}

const freshForm = {
	name: '',
}


const NewPlayerForm = ({ classes, getPlayers }) => {
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
		<Form title="Add a New Player" onSubmit={onSubmit}>
			<p className={classes.formTitle} >Name</p>
			<input
				type="text"
				name="name"
				onChange={onChange}
				value={formState.name}
				required
				placeholder="Name"
				className={classes.nameInput}
			/>
		</Form>
	)
}

export default injectSheet(styles)(NewPlayerForm)
