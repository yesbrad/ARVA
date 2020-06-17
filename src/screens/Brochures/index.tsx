import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { BrandInfo } from '../../redux/brands/types';
import { AppState } from '../../redux/state';
import { getBrandAction } from '../../redux/brands/actions';
import { connect } from 'react-redux';
import { getBrochuresAction } from '../../redux/Brochures/actions';
import { BrochureInfo } from '../../redux/Brochures/types';

interface IProps {
	brochures?: BrochureInfo[],
	getBrochuresProp?: any,
}

class Brochures extends React.Component<IProps, {}> {
	componentDidMount () {
		this.props.getBrochuresProp();
	}	

	render() {
		return(
			<div className='main-container'>
				<Header />
				<div className='banner-container'>
					<h1>BROCHURES</h1>
				</div>
				<div className="brochure-info-container">
					<div className="brochure-grid-container">
						{this.props.brochures && this.props.brochures.map((val) => {
							return (
								<div className="brochure-card" key={val.brochureID}>
									<div className="brochure-card-container">
										<img src={val.brochureImageURL}></img>
										<div className="brochure-card-details">
											<h2>{val.brochureTitle}</h2>
											<span>{val.brochureDescription}</span>
											<button onClick={() => window.open(val.brochurePDFURL)}>Open Brochure</button>
										</div>
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
	brochures: state.brochures
});

const mapDispatch = {
	getBrochuresProp: () => getBrochuresAction(),
}

export default connect(mapStateToProps, mapDispatch)(Brochures);