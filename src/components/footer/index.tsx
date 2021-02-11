import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
	render() {
		return(
			<div className='footer-container'>
				<nav>
				<Link id="footer-link" to="/">HOME</Link>
				<Link id="footer-link" to="/stockists">STOCKISTS</Link>
				<Link id="footer-link" to="/brands">BRANDS</Link>
				<Link id="footer-link" to="/brochures">BROCHURES</Link>
				<Link id="footer-link" to="/contact">CONTACT</Link>
				</nav>
				<p>
					&copy; 2021 Australian RV Accesories
				</p>
			</div>
		)
	}
}

export default Footer;