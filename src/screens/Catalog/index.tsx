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
		title: 'Caravan Accessories',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%201%20Caravan%20Accessories.pdf?alt=media&token=9a90eae9-b953-4dfa-a4f3-be414928c924'
	},
	{
		title: 'Car Accessories',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%202%20-%20Car%20Accessories.pdf?alt=media&token=cc4587cf-223d-4b16-88e1-3450be73ac7e'
	},
	{
		title: 'Books',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%203%20-%20Books.pdf?alt=media&token=f4b2c449-4ec9-4c3a-a6a3-1df794e6cfc3'
	},
	{
		title: 'Solar',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%204%20-%20Solar.pdf?alt=media&token=a00c478d-365d-48bf-86f5-9b321c2e0017'
	},
	{
		title: '12 Volt',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%205%20-%2012%20Volt.pdf?alt=media&token=79eb3ba2-db41-4e77-8aa1-a6124b929d19'
	},
	{
		title: '240 Volt',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%206%20-%20240%20Volt.pdf?alt=media&token=3f59dd7b-9998-403d-b378-7c9833850c23'
	},
	{
		title: 'Gas',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%207%20-%20Gas.pdf?alt=media&token=8279ae7d-0485-4a4f-8b94-454a5abc1024'
	},
	{
		title: 'Fridges',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%208%20-%20Fridges.pdf?alt=media&token=675529d0-a214-44e2-ab04-0ef8885fa694'
	},
	{
		title: 'TVs',
		URL: `https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%209%20-%20TV'S_1.pdf?alt=media&token=e6500782-68b5-4c75-b4df-5bd3c7b326d0`
	},
	{
		title: 'Plumbing',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%2010%20-%20Plumbing.pdf?alt=media&token=3590fa43-a230-4d06-8a28-fdcd2c0cb525'
	},
	{
		title: 'Toilets',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%2011%20-%20Toilets.pdf?alt=media&token=623479c7-9db9-4d51-8810-44dce79c8738'
	},
	{
		title: 'Heating Cooling',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%2012%20-%20Heating%20Cooling%20.pdf?alt=media&token=c447a6fe-be9e-40f8-858e-62e38c882ee9'
	},
	{
		title: 'Chassis',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%2013%20-%20Chassis.pdf?alt=media&token=2d259a20-bb4c-442d-81e7-f7a0ef5a7ed5'
	},
	{
		title: 'Hardware & Vents',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%2014%20-%20Hardware%20%26%20Vents.pdf?alt=media&token=cffc19fd-2afc-4b79-b1e3-9151afce4960'
	},
	{
		title: 'Awnings',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%2015%20-%20Awnings.pdf?alt=media&token=99c05997-2ea0-48b1-a481-e6ba040743bd'
	},
	{
		title: 'Windows & Doors',
		URL: 'https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/2021Catalog%2FSection%2016%20-%20Windows%20%26%20Doors.pdf?alt=media&token=b161e42d-495a-490b-9cbf-6a731a80f433'
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
				{sectionData.map((data, index) => (
					<div className="catalog-section">
						<h2>Section {index + 1}</h2>
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