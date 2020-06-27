import React, {useEffect, useState, useRef} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css';
import { NewProductInfo } from '../../redux/newProducts/types';
import { Carousel } from 'react-responsive-carousel';
import { useSprings, animated } from 'react-spring';

interface IProps {
	products: NewProductInfo[]
}

let OrdedProducts = [] as NewProductInfo[];
let inverseIndex = false;

const NewProducts = ( props: IProps)	=> {
	const [currentIndex, SetCurrentIndex] = useState(0	);
	
	const size = 50;

	useEffect(() => {
		if(props.products && OrdedProducts.length === 0){
			OrdedProducts = props.products;
			const timer = setInterval(() =>{
				if(OrdedProducts) {
					SetCurrentIndex(prev => {
						if(prev > OrdedProducts.length - 2){
							inverseIndex = true;
						}

						if(prev <= 1){
							inverseIndex = false;
						}

						return inverseIndex ? prev - 1 : prev + 1;
					});
				}	
			}, 2000);

			return () => {
				window.clearInterval(timer);
			};
		}
	}, [props.products]);

	const RenderProduct = (val: NewProductInfo, style: any, index: number ) => (
		<animated.div style={style} key={val.newProductID} id='newproduct-product-card'>
			<img src={val.newProductImage}></img>
			<div className="newProducts-info-container">
				<h3>{val.newProductName}</h3>
				<span>{val.newProductDescription}</span>
			</div>
		</animated.div>
	);

	const springs = useSprings(OrdedProducts.length, OrdedProducts.map((info, i) => {
		return {
			opacity: 1,
			width: `${size}%`,
			left: `${(size * currentIndex + (i * size) * -1)}%`,
		}
	}));
	
	return(
		<div className="newProduct-container">
			{springs.map((item, i) => RenderProduct(OrdedProducts[i], item, i))}
		</div>
	)
}


export default NewProducts;