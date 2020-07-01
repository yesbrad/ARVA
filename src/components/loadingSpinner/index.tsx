import React from 'react';
import Loader from 'react-loader-spinner'
import './index.css';

const LoadingSpinner = () => {
	return (
		<div className="loadingSpinner-container">
			<Loader
				className="newProduct-spinner"
				type="ThreeDots"
				color="#222"
				height={200}
				width={200}
				visible
			/>
		</div>
	)
}

export default LoadingSpinner;