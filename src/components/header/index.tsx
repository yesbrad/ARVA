import React, { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoIosClose } from 'react-icons/io';
import { OpenCatalog } from '../../util';
import { useSpring, animated} from 'react-spring';

const Header = () => {
	const [isMenuOpen, setisMenuOpen] = useState(true);

	const springProps = useSpring({
		height: isMenuOpen ? '30rem' : '0',
	})

	return(
		<div className="nav-container">
			<div className="header-container">
				<div className="arva-logo">
					<img className="arva-logo" src={require('../../images/Logo.png')}></img>
				</div>
				<div className="right-container">
					<div id='circleDivider' />
					<div id='content-wrapper'>	
						{/* <button id='login-button'>Login</button> */}
						<button id='contact-button' onClick={OpenCatalog}>View Catalog</button>
					</div>
				</div>
				<button onClick={() => setisMenuOpen(false)} className="nav-hamburger-container">
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
			<animated.div style={springProps} className="nav-container-hamburger">
				<button onClick={() => setisMenuOpen(false)}><IoIosClose style={{ width: '100px', height: '100px' }} /></button>
				<Link id="nav-link" to="/">HOME</Link>
				<Link id="nav-link" to="/stockists">STOCKISTS</Link>
				<Link id="nav-link" to="/brands">BRANDS</Link>
				<Link id="nav-link" to="/brochures">BROCHURES</Link>
				<Link id="nav-link" to="/contact">CONTACT</Link>
			</animated.div>
		</div>
	)
}


export default Header;