import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

class Contact extends React.Component {
	render(){
		return(
			<div className='main-container'>
				<Header />
				<div className='banner-container'>

				</div>
				<div className="about-container">
					Contact
				</div>
				<Footer />
			</div>
		)
	}
}

export default Contact;