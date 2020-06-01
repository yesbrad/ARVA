import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import NewProducts from '../../components/newProducts';

class Home extends React.Component {
	render(){
		return(
			<div className='main-container'>
				<Header />
				<div className='banner-container'>
					<h1>Welcome to Australian RV Accesories</h1>
					<h2>Check out out Catalog!</h2>
					<button>Explore</button>
				</div>
				<div className='brands-container'>
					<img src={require('../../images/Brands/Layer1.png')} />
					<img src={require('../../images/Brands/Layer2.png')} />
					<img src={require('../../images/Brands/Layer3.png')} />
					<img src={require('../../images/Brands/Layer4.png')} />
					<img src={require('../../images/Brands/Layer5.png')} />
					<img src={require('../../images/Brands/Layer6.png')} />
					<img src={require('../../images/Brands/Layer7.png')} />
				</div>
				<div className='about-container'>
					<div className='about-padding-container'>
						<h2>New Products</h2>
						<NewProducts />
						<h2>Who We Are</h2>
						<div className='about-pargraph-container'>
							<p>Australian RV Accessories are quality importers, exporters and wholesalers of RV accessories to the caravan and motorhome industries of Australia and New Zealand.

		Australian RV Accessories are one of the foremost RV and caravan accessory suppliers in Australia. Our aim is to provide a quality service to the wholesale RV market and give customers an alternative and equitable supply with new and innovative products.</p>
							<p>Australian RV Accessories are distributors of Shurflo, Collapsible Space Saving Products, Royal Kitchenware, On The Road RV, Fan-Tastic Portable Cooling Solutions, Premier, RV Flomaster, Dirty Devil, Vision Plus Replacement Towing Mirrors and more.

		Whilst we welcome all enquiries please be aware that we are a wholesale only business and so not sell direct to the public. Please call for the name of your nearest stockist.</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Home;