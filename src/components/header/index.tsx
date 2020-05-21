import React from 'react';
import './index.css';

class Header extends React.Component {
	render(){
		return(
			<div className="nav-container">
				<div className="header-container">
					<div className="arva-logo">
						<img src={require('../../images/Logo.png')}></img>
					</div>
					<div className="right-container">
						<div id='circleDivider' />
						<div id='content-wrapper'>
							<button id='login-button'>Login</button>
							<button id='contact-button'>Contact Us</button>
						</div>
					</div>
				</div>
				<nav className="navbar-container">
					<div>HOME</div>
					<div>ABOUT</div>
					<div>BRANDS</div>
					<div>CONTACT</div>
				</nav>
			</div>
		)
	}
}

export default Header;