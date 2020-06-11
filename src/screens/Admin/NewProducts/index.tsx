import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { URLtoBASE64Raw } from '../../../util';
import { User } from '../index';
import { AppState } from '../../../redux/state';
import { NewProductInfo } from '../../../redux/newProducts/types';
import { addNewProductAction, deleteNewProductAction, getNewProductsAction } from '../../../redux/newProducts/actions';
import NewProducts from '../../../components/newProducts';

interface IState {
	newProductIDInput: string,
	newProductImageInput: FileList | null,
	newProductTitleInput: string,
	newProductDescriptionInput: string,
	deleting: boolean,
	uploading: boolean,
	error: string,
}

interface IProps {
	addNewProductAction: any,
	deleteNewProductAction: any,
	getNewProductsAction: any,
	user: User
	newProducts: NewProductInfo[],
}

class AdminNewProduct extends React.Component<IProps, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			newProductIDInput: 'Name',
			newProductImageInput: null,
			newProductTitleInput: 'Enter title',
			newProductDescriptionInput: 'Description',
			deleting: false,
			uploading: false,
			error: '',
		};
	}

	componentDidMount() {
		this.props.getNewProductsAction();
	}

	onAddNewProduct = async () => {
		console.log('Adding New Product');
		
		if (this.state.uploading) return;

		this.setState({ uploading: true, error: '' });

		const { newProductIDInput, newProductTitleInput, newProductImageInput, newProductDescriptionInput } = this.state;

		let takenID: boolean = false;

		this.props.newProducts.map((prod) => {
			if (prod.newProductID === newProductIDInput) {
				this.setState({ error: 'ID Already Taken', uploading: false });
				takenID = true;
			}
		});

		if (takenID) return;

		if (newProductImageInput === null) {
			this.setState({ error: 'Image Missing', uploading: false });
			return;
		}

		try {
			const imageBase = await URLtoBASE64Raw(newProductImageInput?.item(0) as File)
			
			await this.props.addNewProductAction({
				newProductID: newProductIDInput,
				newProductImage: imageBase,
				newProductName: newProductTitleInput,
				newProductDescription: newProductDescriptionInput, 
			}, this.props.user);

			console.log("Finshed Adding Product")

		} catch (err) {
			console.log(err);
		}

		this.setState({ uploading: false });
	}

	onDeleteNewProduct = async (product: NewProductInfo) => {
		console.log('Deleting: ' + product.newProductID);

		if (this.state.deleting) return;

		this.setState({ deleting: true });

		try {
			await this.props.deleteNewProductAction(product, this.props.user)
			console.log('Removed: ' + product.newProductID);
		} catch (err) {
			console.log('Deleting Failed', err)
		}

		this.setState({ deleting: false });
	}

	render() {
		return (
			<div className="admin-container">
				<div className="admin-column">
					<div className="admin-column-input">
						<h1>NEW PRODUCT EDITOR</h1>
						<h3>ID</h3>
						<input value={this.state.newProductIDInput} onChange={res => this.setState({ newProductIDInput: res.target.value })}></input>
						<h3>Title</h3>
						<input value={this.state.newProductTitleInput} onChange={res => this.setState({ newProductTitleInput: res.target.value })}></input>
						<h3>Description</h3>
						<input value={this.state.newProductDescriptionInput} onChange={res => this.setState({ newProductDescriptionInput: res.target.value })}></input>
						<h3>Image URI</h3>
						<input type="file" accept="image/png" onChange={res => this.setState({ newProductImageInput: res.target.files as FileList | null })}></input>
						<button onClick={() => this.onAddNewProduct()}>{this.state.uploading ? 'UPLOADING IN PROGESS' : "Upload"}</button>
						<span>{this.state.error}</span>
					</div>
				</div>
				<div className="admin-column">
					<h3>Current Content</h3>
					<div className="admin-column-content">
						{this.props.newProducts && this.props.newProducts.map(val => {
							return (
								<div key={val.newProductID} className='admin-data-card'>
									<span>{val.newProductName}</span>
									<button onClick={() => this.onDeleteNewProduct(val)}>{this.state.deleting ? "DELETING" : "Delete"}</button>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatch = {
	addNewProductAction: (p: NewProductInfo, user: User) => addNewProductAction(p, user),
	deleteNewProductAction: (p: NewProductInfo, user: User) => deleteNewProductAction(p, user),
	getNewProductsAction: () => getNewProductsAction(),
}

const mapToProps = (state: AppState) => ({
	newProducts: state.newProducts,
})

export default connect(mapToProps, mapDispatch)(AdminNewProduct);