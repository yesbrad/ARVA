import React from 'react';
import './index.css';
import Header from '../../components/header';

class Home extends React.Component {
	render(){
		return(
			<div className='main-container'>
				<Header />
			</div>
		)
	}
}

export default Home;