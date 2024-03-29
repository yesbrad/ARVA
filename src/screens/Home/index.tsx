import React from 'react';
import './index.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import NewProducts from '../../components/newProducts';
import { connect } from 'react-redux';
import { AppState } from '../../redux/state';
import { getBrochuresAction } from '../../redux/Brochures/actions';
import { getNewProductsAction } from '../../redux/newProducts/actions';
import { getStockistAction } from '../../redux/stockists/actions';
import { getBrandAction } from '../../redux/brands/actions';
import { NewProductInfo } from '../../redux/newProducts/types';
import Banner from '../../components/banner';
import BannerImage from '../../images/BannerImages/Banner9.jpg';
import { OpenCatalog } from '../../util';
import BrandStrip from '../../components/brandStrip';

interface IProps {
	getBrochuresAction: any,
	getNewProductsAction: any,
	getStockistAction: any,
	getBrandAction: any,
	newProducts: NewProductInfo[],
}

class Home extends React.Component<IProps, {}> {
	componentDidMount() {
		this.props.getNewProductsAction();
		this.props.getBrochuresAction();
		this.props.getStockistAction();
		this.props.getBrandAction();
	}


	render(){
		return(
			<div className='main-container'>
				<Header />
				<Banner
					backgroundImage={BannerImage}
					title="Welcome To Australian RV"
					description="Checkout our 2021 Catalogue below!"
					cat={true}
				/>
				<BrandStrip />
				<div className='home-container'>
					<div className='home-padding-container'>
						<h2>New Products</h2>
						<NewProducts products={this.props.newProducts}/>
						<h2>Who We Are</h2>
						<div className='home-pargraph-container'>
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

const mapDispatch = {
	getBrochuresAction: () => getBrochuresAction(),
	getNewProductsAction: () => getNewProductsAction(),
	getStockistAction: () => getStockistAction(),
	getBrandAction: () => getBrandAction(),
}

const mapToProps = (state: AppState) => ({
	newProducts: state.newProducts,
})

export default connect(mapToProps, mapDispatch)(Home);