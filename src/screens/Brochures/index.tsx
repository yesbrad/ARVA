import React from 'react';
import './index.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { AppState } from '../../redux/state';
import { connect } from 'react-redux';
import { getBrochuresAction } from '../../redux/Brochures/actions';
import { BrochureInfo } from '../../redux/Brochures/types';
import Banner from '../../components/banner';
import BannerImage from '../../images/BannerImages/Banner8.jpg';
import LoadingSpinner from '../../components/loadingSpinner';
import { FaEye } from 'react-icons/fa';

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
				<Banner
					backgroundImage={BannerImage}
					title="Brochures"
					description="Have a look at these Select Brochures!"
				/>
				{this.props.brochures.length === 0 && <LoadingSpinner />}
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
											<button onClick={() => window.open(val.brochurePDFURL)}><FaEye className="brochure-icon" /></button>
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