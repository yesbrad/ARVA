import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoIosClose } from 'react-icons/io';

interface IState {
	isMenuOpen: boolean,
}

class Header extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			isMenuOpen: false
		}
	}

	render() {
		return(
			<div className="nav-container">
				<div className="header-container">
					<div className="arva-logo">
						<img className="arva-logo" src={require('../../images/Logo.png')}></img>
					</div>
					<div className="right-container">
						<div id='circleDivider' />
						<div id='content-wrapper'>
							<button id='login-button'>Login</button>
							<button id='contact-button'>Contact Us</button>
						</div>
					</div>
					<button onClick={() => this.setState({ isMenuOpen: true })} className="nav-hamburger-container">
						<IoMdMenu style={{width: '50px', height: '50px'}} />
					</button>
				</div>
				<nav className="navbar-container">
					<Link id="nav-link" to="/">HOME</Link>
					<Link id="nav-link" to="/stockists">STOCKISTS</Link>
					<Link id="nav-link" to="/brands">BRANDS</Link>
					<Link id="nav-link" to="/brochures">BROCHURES</Link>
					<Link id="nav-link" to="/contact">CONTACT</Link>
				</nav>
				{/* {this.state.isMenuOpen && <div className="nav-container-hamburger">
					<button onClick={() => this.setState({ isMenuOpen: false })}><IoIosClose style={{ width: '50px', height: '50px' }} /></button>
					<Link id="nav-link" to="/">HOME</Link>
					<Link id="nav-link" to="/stockists">STOCKISTS</Link>
					<Link id="nav-link" to="/brands">BRANDS</Link>
					<Link id="nav-link" to="/brochures">BROCHURES</Link>
					<Link id="nav-link" to="/contact">CONTACT</Link>
				</div>} */}
			</div>
		)
	}
}

export default Header;