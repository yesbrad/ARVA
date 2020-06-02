import React from 'react';
import '../index.css';
import { apiURL } from '../../../api';
import { BrandInfo } from "../../Brands";
const imageToBase64 = require('image-to-base64');

interface IState {
	info: BrandInfo[],
	brandIDInput: string,
	brandImageInput: FileList | null,
	deleting: boolean,
	uploading: boolean,
}

class AdminBrands extends React.Component<{}, IState> {
	constructor(props: any){
		super(props);
		this.state = {
			info: [],
			brandIDInput: 'Name',
			brandImageInput: null,
			deleting: false,
			uploading: false,
		};
	}

	componentDidMount () {
		this.pullBrands();
	}

	onAddBrand = async () => {
		console.log('Adding Brand');
		if(this.state.uploading) return;

		this.setState({uploading: true});

		const { brandIDInput, brandImageInput} = this.state;

		let reader = new FileReader();
		reader.readAsDataURL(brandImageInput?.item(0) as File);
		reader.onload = async () => {
			try {
				const imageBase = String(reader.result).replace('data:image/png;base64,' , '');

				await fetch(apiURL + '/addBrand', {
					method: "POST",
					headers: {
						"Accept": "application/json",
					},
					body: JSON.stringify({
						ID: brandIDInput,
						image64: imageBase,
					}),
				});

				await this.pullBrands();
			} catch (err){
				console.log(err);
			}

			this.setState({uploading: false});
		};
		reader.onerror = (error) => {
			console.log('Error: ', error);
			this.setState({uploading: false});
			return;
		};
		
	}

	onDeleteBrand = async (brandID: string) => {
		console.log('Deleting: ' + brandID);

		if(this.state.deleting) return;

		this.setState({deleting: true});

		try{
			await fetch(apiURL + '/removeBrand', {
				method: 'POST',
				body: JSON.stringify({ brandID })
			});

			console.log('Removed: ' + brandID);

			await this.pullBrands();
		} catch (err) {
			console.log('Deleting Failed', err)
		}

		this.setState({deleting: false});
	}

	pullBrands = async () => {
		const brands = await (await fetch(apiURL + '/getBrands')).json();
		this.setState({ info: brands.brands });
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
						</div>
					</div>
					<div className="admin-column">
						<h3>Current Content</h3>
						<div className="admin-column-content">
							{this.state.info.map(val => {
								return (
									<div key={val.brandID} className='admin-data-card'>
										<span>{val.brandID}</span>
										<button onClick={() => this.onDeleteBrand(val.brandID)}>{this.state.deleting ? "DELETING" : "Delete"}</button>
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

export default AdminBrands;