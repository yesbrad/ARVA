import React from 'react';
import './index.css';
import { apiURL } from '../../api';
import { StockistInfo } from "../Stockists";

interface IState {
	stockInfo: StockistInfo[],
	stockID: string,
	stockImageURI: string,
	stockTitle: string,
}

class Admin extends React.Component<{}, IState> {
	constructor(props: any){
		super(props);
		this.state = {
			stockInfo: [],
			stockID: 'Name',
			stockImageURI: 'paste an image uri here',
			stockTitle: 'Enter title',
		};
	}

	componentDidMount () {
		this.pullStockist();
	}

	onAddStockist = async () => {
		console.log('Adding Stockist');

		const { stockID, stockTitle, stockImageURI} = this.state;

		try {
			await fetch(apiURL + '/addStockist', {
				method: "POST",
				headers: {
					"Accept": "application/json",
				},
				body: JSON.stringify({
					ID: stockID,
					imageURI: stockImageURI,
					title: stockTitle
				}),
			});

			await this.pullStockist();
		} catch (err){
			console.log(err);
		}

	}

	onDeleteStockist = async (name: string) => {
		console.log('Deleting: ' + name);

		try{
			await fetch(apiURL + '/removeStockist', {
				method: 'POST',
				body: JSON.stringify({ ID: name })
			});

			console.log('Removed: ' + name);

			await this.pullStockist();
		} catch (err) {
			console.log('Deleting Failed', err)
		}
	}

	pullStockist = async () => {
		const newStock = await (await fetch(apiURL + '/getStockists')).json();
		this.setState({ stockInfo: newStock.stockists });
	}

	render(){
		return(
			<div>
				<div className="admin-stockist-container">
					<h3>ID</h3>
					<textarea value={this.state.stockID} onChange={res => this.setState({stockID: res.target.value})}></textarea>
					<h3>Image URI</h3>
					<textarea value={this.state.stockImageURI} onChange={res => this.setState({stockImageURI: res.target.value})}></textarea>
					<h3>Title</h3>
					<textarea value={this.state.stockTitle} onChange={res => this.setState({stockTitle: res.target.value})}></textarea>
					<button onClick={() => this.onAddStockist()}>Add Stockist</button>
					{this.state.stockInfo.map(val => {
						return (
							<div className='admin-stockist-card'>
								<span>{val.title}</span>
								<button onClick={() => this.onDeleteStockist(val.ID)}>Delete</button>
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}

export default Admin;