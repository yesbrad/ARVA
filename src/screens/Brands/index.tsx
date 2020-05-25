import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

class Brands extends React.Component {
	render(){
		return(
			<div className='main-container'>
				<Header />
				<div className='banner-container'>

				</div>
				<div className="about-container">
					Brands
				</div>
				<Footer />
			</div>
		)
	}
}

export default Brands;