import React from 'react';
import '../index.css';
import { BrandInfo } from '../../../redux/brands/types';
import { connect } from 'react-redux';
import { getBrandAction, addBrandAction, deleteBrandAction } from '../../../redux/brands/actions';
import { AppState } from '../../../redux/state';
import { User } from '..';
import { URLtoBASE64Raw } from '../../../util';

interface IState {
	brandIDInput: string,
	brandImageInput: FileList | null,
	deleting: boolean,
	uploading: boolean,
	error: string
}

interface IProps {
	brands: BrandInfo[],
	getBrandsProp?: any,
	addBrandProp: any,
	deleteBrandProp: any,
	user: User,
}

class AdminBrands extends React.Component<IProps, IState> {
	constructor(props: any){
		super(props);
		this.state = {
			brandIDInput: 'Name',
			brandImageInput: null,
			deleting: false,
			uploading: false,
			error: ''
		};
	}

	componentDidMount () {
		this.props.getBrandsProp();
	}

	onAddBrand = async () => {
		console.log('Adding Stockist');
		
		if(this.state.uploading) return;

		this.setState({uploading: true, error: ''});

		const { brandIDInput, brandImageInput} = this.state;

		let takenID: boolean = false;

		this.props.brands.map((prod) => {
			if (prod.brandID === brandIDInput) {
				this.setState({ error: 'ID Already Taken', uploading: false });
				takenID = true;
			}
		});

		if (takenID) return;

		if (brandImageInput === null) {
			this.setState({ error: 'Image Missing', uploading: false });
			return;
		}


		try {
			const imageBase = await URLtoBASE64Raw(brandImageInput?.item(0) as File)
			
			await this.props.addBrandProp({
				brandID: brandIDInput,
				brandImage: imageBase
			} as BrandInfo, this.props.user);

			console.log("Finshed Adding")

		} catch (err){
			console.log(err);
		}

		this.setState({uploading: false});
		
	}

	onDeleteBrand = async (brand: BrandInfo) => {
		const { brandID } = brand;
		console.log('Deleting: ' + brandID);

		if(this.state.deleting) return;

		this.setState({deleting: true});

		try{
			await this.props.deleteBrandProp(brand, this.props.user)
			console.log('Removed: ' + brandID);
		} catch (err) {
			console.log('Deleting Failed', err)
		}

		this.setState({deleting: false});
	}

	render(){
		return(
			<div>
				<div className="admin-container">
					<div className="admin-column">
						<div className="admin-column-input">
							<h1>BRANDS EDITOR</h1>
							<h3>ID</h3>
							<input value={this.state.brandIDInput} onChange={res => this.setState({brandIDInput: res.target.value})}></input>
							<h3>Image URI</h3>
							<input type="file" accept="image/png" onChange={res => this.setState({ brandImageInput: res.target.files as FileList | null })}></input>
							<button onClick={() => this.onAddBrand()}>{this.state.uploading ? 'UPLOADING IN PROGESS' : "Upload"}</button>
							<span>{this.state.error}</span>
						</div>
					</div>
					<div className="admin-column">
						<h3>Current Content</h3>
						<div className="admin-column-content">
							{this.props.brands && this.props.brands.map(val => {
								return (
									<div key={val.brandID} className='admin-data-card'>
										<span>{val.brandID}</span>
										<button onClick={() => this.onDeleteBrand(val)}>{this.state.deleting ? "DELETING" : "Delete"}</button>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state: AppState) => ({
	brands: state.brands
});

const mapDispatch = {
	getBrandsProp: () => getBrandAction(),
	addBrandProp: (info: BrandInfo, user: User) => addBrandAction(info, user),
	deleteBrandProp: (info: BrandInfo, user: User) => deleteBrandAction(info, user),
}

export default connect(mapStateToProps, mapDispatch)(AdminBrands);