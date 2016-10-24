import React from 'react'
import HeaderRow from './HeaderRow'
import Drawer from './Drawer'

const App = ({children}) => (
	<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<HeaderRow />
		<Drawer />
		<main className="mdl-layout__content">
			<div className="page-content">
				<br/>
				{children}
			</div>
		</main>
	</div>
)

export default App
