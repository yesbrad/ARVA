import React from 'react';
import '../index.css';
import { apiURL } from '../../../api';
import { StockistInfo } from '../../../redux/stockists/types';
import { connect } from 'react-redux';
import { addStockistAction, getStockistAction, deleteStockistAction } from '../../../redux/stockists/actions';
import { URLtoBASE64Raw } from '../../../util';
import { User } from '../index';
import { AppState } from '../../../redux/state';

interface IState {
	stockInfo: StockistInfo[],
	stockID: string,
	stockTitle: string,
	stockWebsite: string,
	stockState: string,
	stockAddress: string,
	deleting: boolean,
	uploading: boolean,
	error: string
}

interface IProps {
	addStockistProp: any,
	getStockists: any,
	deleteStockistProp: any,
	user: User
	stockists: StockistInfo[],
}

class AdminStockists extends React.Component<IProps, IState> {
	constructor(props: any){
		super(props);
		this.state = {
			stockInfo: [],
			stockID: 'Name',
			stockTitle: 'Enter title',
			stockWebsite: 'https//:austrv.com.au/stockists',
			stockAddress: '45 Flinders St, Melbourne, Victoria 3000',
			stockState: 'VIC',
			deleting: false,
			uploading: false,
			error: ''
		};
	}

	componentDidMount () {
		this.pullStockist();
	}

	GetStockID = () => this.state.stockTitle.concat(this.state.stockState)

	onAddStockist = async () => {
		console.log('Adding Stockist');
		
		if(this.state.uploading) return;

		this.setState({uploading: true, error: ''});

		const {stockTitle, stockWebsite, stockState, stockAddress} = this.state;

		let takenID: boolean = false;

		this.props.stockists.map((prod) => {
			if (prod.ID === this.GetStockID()) {
				this.setState({ error: 'ID Already Taken', uploading: false });
				takenID = true;
			}
		});

		if (takenID) return;

		try {			
			await this.props.addStockistProp({
				ID: this.GetStockID(),
				name: stockTitle,
				website: stockWebsite,
				address: stockAddress,
				state: stockState
			}, this.props.user);

			console.log("Finshed Adding")

		} catch (err){
			console.log(err);
		}

		this.setState({uploading: false});
	}

	onDeleteStockist = async (name: StockistInfo) => {
		console.log('Deleting: ' + name.ID);

		if(this.state.deleting) return;

		this.setState({deleting: true});

		try{
			await this.props.deleteStockistProp(name, this.props.user)
			console.log('Removed: ' + name.ID);
		} catch (err) {
			console.log('Deleting Failed', err)
		}

		this.setState({deleting: false});
	}

	pullStockist = async () => {
		this.props.getStockists();
	}

	render() {
		return(
			<div>
				{this.renderStockistPanel()}
			</div>
		);
	}

	renderStockistPanel = () => (
		<div className="admin-container">
			<div className="admin-column">
				<div className="admin-column-input">
					<h1>STOCKIST EDITOR</h1>
					<h3>Title</h3>
					<input value={this.state.stockTitle} onChange={res => this.setState({stockTitle: res.target.value})}></input>
					<h3>WEBSITE</h3>
					<input value={this.state.stockWebsite} onChange={res => this.setState({stockWebsite: res.target.value})}></input>
					<h3>ADDRESS</h3>
					<input value={this.state.stockAddress} onChange={res => this.setState({stockAddress: res.target.value})}></input>
					<h3>STATE CODE (eg VIC, NSW)</h3>
					<input value={this.state.stockState} onChange={res => this.setState({stockState: res.target.value})}></input>
					<button onClick={() => this.onAddStockist()}>{this.state.uploading ? 'UPLOADING IN PROGESS' : "Upload"}</button>
					<span>{this.state.error}</span>
				</div>
			</div>
			<div className="admin-column">
				<h3>Current Content</h3>
				<div className="admin-column-content">
					{this.props.stockists && this.props.stockists.map(val => {
						return (
							<div key={val.ID} className='admin-data-card'>
								<span>Name: {val.name} | State: {val.state}</span>
								<button onClick={() => this.onDeleteStockist(val)}>{this.state.deleting ? "DELETING" : "Delete"}</button>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const mapDispatch = {
	addStockistProp: (p: StockistInfo, user: User) => addStockistAction(p, user),
	deleteStockistProp: (p: StockistInfo, user: User) => deleteStockistAction(p, user),
	getStockists: () => getStockistAction(),
}

const mapToProps = (state: AppState) => ({
	stockists: state.stockists,
})

export default connect(mapToProps, mapDispatch)(AdminStockists);