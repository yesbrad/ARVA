import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { StockistInfo } from '../../redux/stockists/types';
import { connect } from 'react-redux';
import { AppState } from '../../redux/state';
import { getStockistAction } from '../../redux/stockists/actions';
import Banner from '../../components/banner';
import BannerImage from '../../images/BannerImages/Banner3.jpg';

interface IState {
	stockInfo: StockistInfo[],
}

interface IProps {
	stockists?: StockistInfo[]
	getStockistProp?: any;
}

class Stockists extends React.Component<IProps, {}> {

	componentDidMount() {
		this.props.getStockistProp();
	}	

	render(){
		return(
			<div className='stockists-main-container'>
				<Header />
				<Banner
					backgroundImage={BannerImage}
					title="Stockists"
					description="Who Has Our Product In Stock!"
				/>
				<div className="stockists-info-container">
					<div className="stockists-grid-container">
						{this.props.stockists && this.props.stockists.map((val) => {
							console.log(val);
							return (
								<div className="stockists-card-padding-container" key={val.ID}>
									<div className="stockists-card">
										<p>{val.title}</p>
										<img src={val.imageURI}></img>
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
	stockists: state.stockists
});

const mapDispatch = {
	getStockistProp: () => getStockistAction(),
}

export default connect(mapStateToProps, mapDispatch)(Stockists);