import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { StockistInfo } from '../../redux/stockists/types';

interface IState {
	stockInfo: StockistInfo[],
}

class Stockists extends React.Component<{}, IState> {
	
	constructor(props: any) {
		super(props);
		this.state = { stockInfo: [] };
	}

	componentDidMount () {
		console.log('fetch');
		fetch('https://us-central1-arva-3193d.cloudfunctions.net/getStockists', {
			method: "GET",
			headers: {
			  "Accept": "application/json",
			},
		}).then((val) => {
			val.json().then((data) => {
				console.log(data.stockists);
				data.stockists.map((st: any) => {
					this.setState({stockInfo: [...this.state.stockInfo, st as StockistInfo]})
				})
			})
		}).catch(err => console.log(err.message));
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
						{this.state.stockInfo.map((val) => {
							return (
								<div className="stockists-card">
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

export default Stockists;