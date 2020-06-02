import React from 'react';
import './index.css';
import AdminStockists from './Stockists';
import AdminBrands from './Brands';


class Admin extends React.Component {
	render(){
		return(
			<div>
				<nav className="admin-nav">

				</nav>
				<AdminStockists />
				<AdminBrands />
			</div>
		);
	}
}

export default Admin;