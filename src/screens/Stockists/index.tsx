import React, { useEffect, useState } from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { StockistInfo } from '../../redux/stockists/types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/state';
import { getStockistActionTwo } from '../../redux/stockists/actions';
import Banner from '../../components/banner';
import BannerImage from '../../images/BannerImages/Banner7.jpg';
import LoadingSpinner from '../../components/loadingSpinner';
import { useTransition, animated } from 'react-spring';

const Stockists = () => {
	const [currentState, SetCurrrentState] = useState('VIC');
	const stockists = useSelector((state: AppState) => state.stockists);
	const dispatch = useDispatch();

	const filtedByState = stockists.filter((stock) => {
		return stock.state === currentState;
	});

	const transitons = useTransition(filtedByState, item => item.ID, {
		from: { opacity: 0, position: 'absolute', left: -100, right: 0 },
		enter: { opacity: 1, position: "inherit", left: 0, right: 0 },
		leave: { opacity: 0,  position: 'absolute',  left: 100, right: 0 },
	});

	useEffect(() => {
		getStockistActionTwo(dispatch);
	}, [])

	return(
		<div className='stockists-main-container'>
			<Header />
			<Banner
				backgroundImage={BannerImage}
				title="Stockists"
				description="Who Has Our Product In Stock!"
			/>
			{stockists.length === 0 && <LoadingSpinner />}
			<div className="stockists-info-container">
				<div className="stockists-state-container">
					<button onClick={() => SetCurrrentState('VIC')} id={currentState === 'VIC' ? 'stockist-button-selected' : 'stockist-button'}>VIC</button>
					<button onClick={() => SetCurrrentState('NSW')} id={currentState === 'NSW' ? 'stockist-button-selected' : 'stockist-button'}>NSW</button>
					<button onClick={() => SetCurrrentState('QLD')} id={currentState === 'QLD' ? 'stockist-button-selected' : 'stockist-button'}>QLD</button>
					<button onClick={() => SetCurrrentState('SA')} id={currentState === 'SA' ? 'stockist-button-selected' : 'stockist-button'}>SA</button>
					<button onClick={() => SetCurrrentState('NT')} id={currentState === 'NT' ? 'stockist-button-selected' : 'stockist-button'}>NT</button>
					<button onClick={() => SetCurrrentState('WA')} id={currentState === 'WA' ? 'stockist-button-selected' : 'stockist-button'}>WA</button>
					<button onClick={() => SetCurrrentState('ACT')} id={currentState === 'ACT' ? 'stockist-button-selected' : 'stockist-button'}>ACT</button>
				</div>
				<div className="stockists-grid-container">
					{transitons.map(({ item, props, key }) => (
						<animated.div style={props} className="stockists-card-padding-container" key={key}>
							<div className="stockists-card">
								<p>{item.name}</p>
								<p>{item.website}</p>
								<p>{item.address}</p>
							</div>
						</animated.div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	)
}


export default Stockists;