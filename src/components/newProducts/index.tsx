import React from 'react';
import './index.css';
import { NewProductInfo } from '../../redux/newProducts/types';

interface IProps {
	products: NewProductInfo[]
}

class NewProducts extends React.Component<IProps, {}> {

	RenderProduct = (val: NewProductInfo) => (
		<div id='newproduct-product-card'>
			<img src={val.newProductImage}></img>
			<h3>{val.newProductName}</h3>
		</div>
	);

	renderAll = () => (this.props.products.map((val) => this.RenderProduct(val)));

	render () {
		return(
			<div className="newProduct-container">
				{this.props.products && this.props.products.map((val) => this.RenderProduct(val))}
			</div>
		)
	}
}

export default NewProducts;