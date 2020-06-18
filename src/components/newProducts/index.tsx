import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css';
import { NewProductInfo } from '../../redux/newProducts/types';
import { Carousel } from 'react-responsive-carousel';

interface IProps {
	products: NewProductInfo[]
}

interface IState {
	currentSlide: number,
}

class NewProducts extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			currentSlide: 0,
		}
	}

	RenderProduct = (val: NewProductInfo) => (
		<div id='newproduct-product-card'>
			<img src={val.newProductImage}></img>
			<div className="newProducts-info-container">
				<h3>{val.newProductName}</h3>
				<span>{val.newProductDescription}</span>
			</div>
		</div>
	);

	renderAll = () => (this.props.products.map((val) => this.RenderProduct(val)));

	render () {
		return(
			<div className="newProduct-container">
				<Carousel
					autoPlay={true}
					selectedItem={this.state.currentSlide}
					onChange={val => this.setState({ currentSlide: val })}
				>
					{this.props.products && this.props.products.map((val) => this.RenderProduct(val))}
				</Carousel>
			</div>
		)
	}
}

export default NewProducts;