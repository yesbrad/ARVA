import React from 'react';
import './index.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { BrandInfo } from '../../redux/brands/types';
import { AppState } from '../../redux/state';
import { getBrandAction } from '../../redux/brands/actions';
import { connect } from 'react-redux';
import Banner from '../../components/banner';
import BannerImage from '../../images/BannerImages/Banner11.jpg';
import LoadingSpinner from '../../components/loadingSpinner';

interface IProps {
	brands?: BrandInfo[],
	getBrandsProp?: any,
}

class Brands extends React.Component<IProps, {}> {
	componentDidMount () {
		this.props.getBrandsProp();
	}	

	render() {
		return(
			<div className='main-container'>
				<Header />
				<Banner
					backgroundImage={BannerImage}
					title="Brands"
					description="Some Top Brands That We Supply!"
				/>
				{this.props.brands.length === 0 && <LoadingSpinner />}
				<div className="brand-info-container">
					<div className="brand-grid-container">
						{this.props.brands && this.props.brands.map((val) => {
							return (
								<div key={val.brandID} className="brand-card">
									<div className="brand-card-container">
										<div className="brand-card-image" style={{backgroundImage: `url(${val.brandImage})`}} />
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (state: AppState) => ({
	brands: state.brands
});

const mapDispatch = {
	getBrandsProp: () => getBrandAction(),
}

export default connect(mapStateToProps, mapDispatch)(Brands);