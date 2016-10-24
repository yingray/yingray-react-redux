import React from 'react'
import logo from '../images/logo.svg'

const HeaderRow = () => (
	<header className="mdl-layout__header">
		<div className="mdl-layout__header-row">
			<img src={logo} className="App-logo" alt="logo"/>
			<span className="mdl-layout-title">
				Yingray's React-Redux Example
			</span>

			<div className="mdl-layout-spacer"></div>

			<nav className="mdl-navigation mdl-layout--large-screen-only">
				<a className="mdl-navigation__link" href="">Link</a>
				<a className="mdl-navigation__link" href="">Link</a>
				<a className="mdl-navigation__link" href="">Link</a>
				<a className="mdl-navigation__link" href="">Link</a>
			</nav>
		</div>
	</header>
)

export default HeaderRow