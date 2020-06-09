import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { StockistInfo } from '../../redux/stockists/types';
import { connect } from 'react-redux';
import { AppState } from '../../redux/state';
import { getStockistAction } from '../../redux/stockists/actions';

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
				<div className='banner-container'>
					<h1>STOCKISTS</h1>
				</div>
				<div className="stockists-info-container">
					<div className="stockists-grid-container">
						{this.props.stockists && this.props.stockists.map((val) => {
							return (
								<div className="stockists-card" key={val.ID}>
									<div className="stockists-card-container">
										<span>{val.title}</span>
										<img src={val.image64}></img>
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