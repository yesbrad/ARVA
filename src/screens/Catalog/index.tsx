import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import BannerImage from '../../images/BannerImages/Banner5.jpg';

interface SectionData {
	title: string,
	URL: string
}

const sectionData = [
	{
		title: 'Section 1',
		URL: 'www.google.com'
	},
	{
		title: 'Section 2',
		URL: 'google.com'
	},
	{
		title: 'Section 3',
		URL: 'google.com'
	},
	{
		title: 'Section 4',
		URL: 'google.com'
	},
	{
		title: 'Section 5',
		URL: 'google.com'
	},
] as SectionData[];

const Catalog = () => {
	return(
		<div className='main-container'>
			<Header />
			<div className="catalog-header">
				<div className="catalog-header-logo"></div>
				<span>CATALOG</span>
			</div>
			<div className="catalog-section-container">
				{sectionData.map(data => (
					<div className="catalog-section">
						<span>{data.title}</span>
						<button onClick={() => window.open(data.URL)}>View Section</button>
					</div>
				))}
			</div>
			<Footer />
		</div>
	)
}


export default Catalog;