import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import Board from 'pages/Board'
import { yellow } from 'constants/styles/colors'

const useStyles = createUseStyles(() => {
	const marPadZero = {
		margin: 0,
		padding: 0,
	}
	const baseStyle = {
		height: '100%',
		width: '100%',
		fontFamily: 'roboto, sans-serif',
		...marPadZero,
	}

	return {
		'@import': [
			'url("https://use.typekit.net/vot1gaz.css")',
		],
		'@global': {
			html: baseStyle,
			body: {
				...baseStyle,
				position: 'relative',
				backgroundColor: yellow,
			},
			'#app': baseStyle,
			div: {
				boxSizing: 'border-box',
			},
			p: marPadZero,
			h1: marPadZero,
			h2: marPadZero,
			h3: marPadZero,
		},
	}
})

const App = ({ location }) => {
	// Create global effects or state here
	// with access to router location
	useStyles()
	return (
		<>
			<Switch>
				<Route path="/" exact component={Board} />
			</Switch>
			{/* NavBar?? */}
		</>
	)
}

const RouterApp = withRouter(props => <App {...props} />)

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)

