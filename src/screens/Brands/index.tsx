import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { apiURL } from '../../api';

export interface BrandInfo {
	brandID: string
	brandImage: string,
}

interface IState {
	info: BrandInfo[],
}

class Brands extends React.Component<{}, IState> {
	constructor(props: any){
		super(props);
		this.state = {
			info: [],
		}
	}

	componentDidMount () {
		fetch(apiURL + '/getBrands', {
			method: "GET",
			headers: {
			  "Accept": "application/json",
			},
		}).then((val) => {
			val.json().then((data) => {
				data.brands.map((st: any) => {
					this.setState({info: [...this.state.info, st as BrandInfo]})
				})
			})
		}).catch(err => console.log(err.message));
	}	

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
						{this.state.info.map((val) => {
							return (
								<div className="brand-card">
									<div className="brand-card-container">
										<img src={val.brandImage}></img>
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