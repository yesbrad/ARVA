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
	stockImageURI: FileList | null,
	stockTitle: string,
	deleting: boolean,
	uploading: boolean,
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
			stockImageURI: null,
			stockTitle: 'Enter title',
			deleting: false,
			uploading: false,
		};
	}

	componentDidMount () {
		this.pullStockist();
	}

	onAddStockist = async () => {
		console.log('Adding Stockist');
		
		if(this.state.uploading) return;

		this.setState({uploading: true});

		const { stockID, stockTitle, stockImageURI} = this.state;

		try {
			const imageBase = await URLtoBASE64Raw(stockImageURI?.item(0) as File)
			
			await this.props.addStockistProp({
				ID: stockID,
				image64: imageBase,
				title: stockTitle
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
					<h3>ID</h3>
					<input value={this.state.stockID} onChange={res => this.setState({stockID: res.target.value})}></input>
					<h3>Title</h3>
					<input value={this.state.stockTitle} onChange={res => this.setState({stockTitle: res.target.value})}></input>
					<h3>Image URI</h3>
					<input type="file" accept="image/png" onChange={res => this.setState({ stockImageURI: res.target.files as FileList | null })}></input>
					<button onClick={() => this.onAddStockist()}>{this.state.uploading ? 'UPLOADING IN PROGESS' : "Upload"}</button>
				</div>
			</div>
			<div className="admin-column">
				<h3>Current Content</h3>
				<div className="admin-column-content">
					{this.props.stockists.map(val => {
						return (
							<div key={val.ID} className='admin-data-card'>
								<span>{val.title}</span>
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