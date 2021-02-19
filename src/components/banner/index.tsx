import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";

interface IProps {
	title?: string,
	description?: string,
	backgroundImage: string,
	buttonText?: string,
	buttonCallback?: any,
	cat?: boolean,
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
				{this.props.cat && <Link className="cat" to="/catalogue">VIEW</Link>}
			</div>
		)
	}
}

export default Banner;


