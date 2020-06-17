import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

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
					<Link id="nav-link" to="/">HOME</Link>
					<Link id="nav-link" to="/stockists">STOCKISTS</Link>
					<Link id="nav-link" to="/brands">BRANDS</Link>
					<Link id="nav-link" to="/brochures">BROCHURES</Link>
					<Link id="nav-link" to="/contact">CONTACT</Link>
				</nav>
			</div>
		)
	}
}

export default Header;