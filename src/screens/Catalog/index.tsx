import React from 'react';
import './index.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { FaEye } from 'react-icons/fa';

interface SectionData {
	title: string,
	URL: string
}

const mainURL = "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:dad4620b-9039-4ace-a74b-7553e98ff374#pageNum=8";

const sectionData = [
	{
		title: 'Chapter 1',
		URL: 'www.google.com'
	},
	{
		title: 'Chapter 2',
		URL: 'google.com'
	},
	{
		title: 'Chapter 3',
		URL: 'google.com'
	},
	{
		title: 'Chapter 4',
		URL: 'google.com'
	},
	{
		title: 'Chapter 5',
		URL: 'google.com'
	},
	{
		title: 'Chapter 6',
		URL: 'google.com'
	},
	{
		title: 'Chapter 7',
		URL: 'google.com'
	},
	{
		title: 'Chapter 8',
		URL: 'google.com'
	},
	{
		title: 'Chapter 9',
		URL: 'google.com'
	},
] as SectionData[];

const Catalog = () => {
	return(
		<div className='main-container'>
			<Header />
			<div className="catalog-header">
				<div className="catalog-header-logo"></div>
			</div>
			
			<div className="catalog-main-download-container">
				<h2 className="catalog-all">
				VIEW OR DOWNLOAD ENTIRE CATALOGUE
				</h2>
				<button className="catalog-main-download" onClick={() => window.open(mainURL)}>
					2020 CATALOGUE DOWNLOAD 
					<FaEye className="catalog-dicon" />
				</button>
			
				<h2 className="catalog-all">
						OR VIEW INDIVIDUAL CHAPTERS
				</h2>
			</div>
			<div className="catalog-section-container">
				{sectionData.map(data => (
					<div className="catalog-section">
						<span>{data.title}</span>
						<h5>Click the button below to View</h5>
						<button onClick={() => window.open(data.URL)}><FaEye className="catalog-dicon" /></button>
					</div>
				))}
			</div>
			<Footer />
		</div>
	)
}


export default Catalog;