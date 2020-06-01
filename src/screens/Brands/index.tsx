import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

interface BrandInfo {
	imageURI: string,
	infoText: string
}

const info: BrandInfo[] = [
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Some Simple info Text Here!'} as BrandInfo,
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Some Simple info Text Here!'} as BrandInfo,
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Some Simple info Text Here!'} as BrandInfo,
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Some Simple info Text Here!'} as BrandInfo,
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Some Simple info Text Here!'} as BrandInfo,
	{imageURI: 'https://images.unsplash.com/photo-1575906421338-0b52b23136c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', infoText: 'Some Simple info Text Here!'} as BrandInfo,
]

class Brands extends React.Component {
	render(){
		return(
			<div className='main-container'>
				<Header />
				<div className='banner-container'>
					<h1>BRANDS</h1>
				</div>
				<div className='brands-container'>
					<img src={require('../../images/Brands/Layer1.png')} />
					<img src={require('../../images/Brands/Layer2.png')} />
					<img src={require('../../images/Brands/Layer3.png')} />
					<img src={require('../../images/Brands/Layer4.png')} />
					<img src={require('../../images/Brands/Layer5.png')} />
					<img src={require('../../images/Brands/Layer6.png')} />
					<img src={require('../../images/Brands/Layer7.png')} />
				</div>
				<div className="brand-info-container">
					<div className="brand-grid-container">
						{info.map((val) => {
							return (
								<div className="brand-card">
									<div className="brand-card-container">
										<img src={val.imageURI}></img>
										{/* <span>{val.infoText}</span> */}
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

export default Brands;