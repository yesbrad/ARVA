import React from 'react';
import './index.css';

interface Product {
	imgURL: any,
	title: string
}

const products: Product[] = [
	{imgURL: require('../../images/TempProduct.jpg'), title: 'New Producasdt'},
	{imgURL: require('../../images/TempProduct.jpg'), title: 'New Produasnmdct'},
	{imgURL: require('../../images/TempProduct.jpg'), title: 'New Produasdct'},
	{imgURL: require('../../images/TempProduct.jpg'), title: 'New Produgfgct'},
	{imgURL: require('../../images/TempProduct.jpg'), title: 'New Psdroduddct'},
	{imgURL: require('../../images/TempProduct.jpg'), title: 'New Prodnmnmuct'},
	{imgURL: require('../../images/TempProduct.jpg'), title: 'New Prodgfhjnmnmuct'},
	{imgURL: require('../../images/TempProduct.jpg'), title: 'New Prodnmegegnmuct'},
	{imgURL: require('../../images/TempProduct.jpg'), title: 'New Prodnmkjhgnmuct'},
];

class NewProducts extends React.Component {

	RenderProduct = (val: Product) => (
		<div id='newproduct-product-card'>
			<img src={val.imgURL}></img>
			<h3>{val.title}</h3>
		</div>
	);

	renderAll = () => (products.map((val) => this.RenderProduct(val)));

	render () {
		return(
			<div className="newProduct-container">
				{products.map((val) => this.RenderProduct(val))}
			</div>
		)
	}
}

export default NewProducts;