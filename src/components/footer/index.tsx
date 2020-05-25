import React from 'react';
import './index.css';

class Footer extends React.Component {
	render() {
		return(
			<div className='footer-container'>
				<nav>
					<div>HOME</div>
					<div>ABOUT</div>
					<div>BRANDS</div>
					<div>CONTACT</div>
				</nav>
				<p>
					Copyright Australian RV Accesories 2020
				</p>
			</div>
		)
	}
}

export default Footer;