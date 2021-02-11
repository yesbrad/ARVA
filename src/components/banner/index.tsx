import React from 'react';
import './index.scss';

interface IProps {
	title?: string,
	description?: string,
	backgroundImage: string,
	buttonText?: string,
	buttonCallback?: any
}

class Banner extends React.Component<IProps, {}> {
	render() {
		return (
			<div className='banner-component-container'>
				<img src={this.props.backgroundImage}>	
				</img>
				{this.props.title && <h1>{this.props.title}</h1>}
				{this.props.description && <h2>{this.props.description}</h2>}
				{this.props.buttonText && <button onClick={this.props.buttonCallback}>{this.props.buttonText}</button>}
			</div>
		)
	}
}

export default Banner;


