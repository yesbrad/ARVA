import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

class AboutUs extends React.Component {
	render(){
		return(
			<div className='main-container'>
				<Header />
				<div className='banner-container'>

				</div>
				<div className="about-container">
					<div className='about-padding-container'>
						<h2>WELCOME TO ABOUT US</h2>
						<div className='about-pargraph-container'>
							<p>Australian RV Accessories was started by Renee and Rod Francis in 2004 when both realised there was a need to provide a quality service to the wholesale RV market and give customers an alternative and equitable supply with new and innovative products.

	Rod is dedicated to sourcing new products from around the world to keep up with the industry’s rapid growth.  We are now distributors of Endless Hot Water, Winegard, and Shurflo, RV Flomaster, On The Road, Royal Kitchenware,</p>
							<p>
							Collapsible Space Saving Products, Vision Plus, Rock Tamers and more. 

	With over 2000 products available Australian RV Accessories is fast becoming one of the leading wholesale suppliers to the RV market.
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default AboutUs;