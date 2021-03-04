import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoIosClose } from 'react-icons/io';
import { useSpring, animated} from 'react-spring';

const Header = () => {
	const [isMenuOpen, setisMenuOpen] = useState(false);

	const springProps = useSpring({
		height: isMenuOpen ? '30rem' : '0',
		opacity: isMenuOpen ? 1 : 0,
	})

	const OpenMenu = (open: boolean) => {
		console.log(isMenuOpen);
		setisMenuOpen(open);
	}

	return(
		<div className="nav-container">
			<div className="header-container">
				<div className="arva-logo">
					<img className="arva-logo" src={require('../../images/Logo.png')}></img>
				</div>
				<img className="arva-slogen" src={require('../../images/Asset 2.png')}></img>
				<div className="right-container">
					<div id='circleDivider' />
					<div id='content-wrapper'>	
						{/* <button id='login-button'>Login</button> */}
						<Link id='contact-button' to="/catalogue">View Catalogue</Link>
					</div>
				</div>
				<button onClick={() => OpenMenu(true)} className="nav-hamburger-container">
					<IoMdMenu style={{width: '50px', height: '50px'}} />
				</button>
			</div>
			<nav className="navbar-container">
				<Link id="nav-link" to="/">HOME</Link>
				<Link id="nav-link" to="/stockists">STOCKISTS</Link>
				<Link id="nav-link" to="/brands">BRANDS</Link>
				<Link id="nav-link" to="/brochures">BROCHURES</Link>
				<Link id="nav-link" to="/warranties">WARRANTIES</Link>
				<Link id="nav-link" to="/contact">CONTACT</Link>
			</nav>
			<animated.div style={springProps} className="nav-container-hamburger">
				<button onClick={() => OpenMenu(false)}><IoIosClose style={{ width: '100px', height: '100px' }} /></button>
				<Link id="nav-link" to="/">HOME</Link>
				<Link id="nav-link" to="/catalog">CATALOG</Link>
				<Link id="nav-link" to="/stockists">STOCKISTS</Link>
				<Link id="nav-link" to="/brands">BRANDS</Link>
				<Link id="nav-link" to="/brochures">BROCHURES</Link>
				<Link id="nav-link" to="/warranties">WARRANTIES</Link>
				<Link id="nav-link" to="/contact">CONTACT</Link>
			</animated.div>
		</div>
	)
}


export default Header;