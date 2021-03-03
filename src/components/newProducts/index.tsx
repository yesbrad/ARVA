import React, {useEffect, useState, useRef} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.scss';
import { NewProductInfo } from '../../redux/newProducts/types';
import Loader from 'react-loader-spinner'
import { useSprings, animated } from 'react-spring';

interface IProps {
	products: NewProductInfo[]
}

let inverseIndex = false;

const NewProducts = ( props: IProps)	=> {
	const [currentIndex, SetCurrentIndex] = useState(3);
	
	let isSmall = window.screen.width < 1000;
	const size = isSmall ? 100 : 25;

	useEffect(() => {
		if(props.products){
			const timer = setInterval(() =>{
					isSmall = window.screen.width < 1000;
				
					SetCurrentIndex(prev => {
						if(prev > props.products.length - 2){
							inverseIndex = true;
						}

						if(prev <= (isSmall ? 0 : 3)){
							inverseIndex = false;
						}

						return inverseIndex ? prev - 1 : prev + 1;
					});
			}, 2000);

			return () => {
				window.clearInterval(timer);
			};
		}
	}, [props.products]);

	const RenderProduct = (val: NewProductInfo, style: any, index: number ) => (
		<animated.div style={style} key={val.newProductID} id='newproduct-product-card'>
			<div id="product-image-container" style={{ backgroundImage: `url(${val.newProductImage})`}}></div>
			<div className="newProducts-info-container">
				<h3>{val.newProductName}</h3>
				<span>{val.newProductDescription}</span>
			</div>
		</animated.div>
	);

	const springs = useSprings(props.products.length, props.products.map((info, i) => {
		return {
			opacity: 1,
			width: `${size}%`,
			left: `${(size * currentIndex + (i * size) * -1)}%`,
		}
	}));
	
	return(
		<div className="newProduct-container">
			{props.products && springs.map((item, i) => RenderProduct(props.products[i], item, i))}
			<div className="newProduct-spinner-container">
				<Loader
					className="newProduct-spinner"
					type="ThreeDots"
					color="#222"
					height={200}
					width={200}
					visible
				/>
				<span>Loading Products...</span>
			</div>
		</div>
	)
}


export default NewProducts;