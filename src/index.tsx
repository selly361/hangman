import 'Styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { HangmanProvider, MenuModalProvider } from 'Contexts'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<HangmanProvider>
				<MenuModalProvider>
					<App />
				</MenuModalProvider>
			</HangmanProvider>
		</BrowserRouter>
	</React.StrictMode>
)

reportWebVitals()
