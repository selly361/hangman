import { Route, Routes } from 'react-router-dom'
import  * as pages from 'Pages'
import { Fragment } from 'react'

function App() {
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<pages.Home />} />
				<Route path='/guide' element={<pages.Guide />} />
				<Route path='/select-category' element={<pages.SelectCategory />} />
				<Route path='/select-category/:category' element={<pages.HangmanGame />} />
				<Route path='*' element={<pages.NotFound />} />
			</Routes>
		</Fragment>
	)
}

export default App
