import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

interface StockistInfo {
	imageURI: string,
	infoText: string
}

const info: StockistInfo[] = [
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Varva'} as StockistInfo,
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Seaflo'} as StockistInfo,
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Seaflo'} as StockistInfo,
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Seaflo'} as StockistInfo,
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Seaflo'} as StockistInfo,
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Seaflo'} as StockistInfo,
]

class Stockists extends React.Component {
	render(){
		return(
			<div className='stockists-main-container'>
				<Header />
				<div className='banner-container'>
					<h1>STOCKISTS</h1>
				</div>
				<div className="stockists-info-container">
					<div className="stockists-grid-container">
						{info.map((val) => {
							return (
								<div className="stockists-card">
									<div className="stockists-card-container">
										<span>{val.infoText}</span>
										<img src={val.imageURI}></img>
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Stockists;