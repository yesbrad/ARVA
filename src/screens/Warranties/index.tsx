import React from 'react';
import './index.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import BannerImage from '../../images/ausroad.jpg';
import { apiURL } from '../../api';
const sgMail = require('@sendgrid/mail')

interface IState {
	isCompany: boolean,
	sent: string,
	companyName: string,
	deliveryAddress: string,
	phone: string,
	email: string,
	quantity: string,
	productDescription: string,
	serialNumber: string,
	name: string,
	invoiceNumber: string,
	purchasedFrom: string,
}

class Warranties extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			isCompany: false,
			sent: '',
			companyName: '',
			email: '',
			name: '',
			phone: '',
			deliveryAddress: '',
			quantity: '',
			productDescription: '',
			serialNumber: '',
			invoiceNumber: '',
			purchasedFrom: '',
		}
	}

	onSendEmail = async () => {
		if (this.state.sent === 'Sending') return;

		this.setState({ sent: 'Sending' });

		const { email, name, companyName,phone,deliveryAddress,productDescription,serialNumber,quantity,invoiceNumber,purchasedFrom } = this.state;

		if (email === '' || name === '' || phone === '' || deliveryAddress === '' || productDescription === ''
			|| serialNumber === '' || invoiceNumber === '') {
			this.setState({ sent: '*Missing Fields' });
			return;
		}

		try {	
			await fetch(`${apiURL}/sendWarrenty`, {
				method: 'POST',
				body: JSON.stringify({
					companyName,
					email,
					name,
					phone,
					deliveryAddress,
					quantity,
					productDescription,
					serialNumber,
					invoiceNumber,
					purchasedFrom,
				}),
			});
			this.setState({ sent: 'Sent' });
			console.log('Sent');
		} catch (err) {
			this.setState({ sent: 'Sending Failed, Please Try Again' });
			console.log('Message Failed', err)
		}
		
	}

	render(){
		return(
			<div className='warranties-main-container'>
				<Header />
				<Banner
					backgroundImage={BannerImage}
					title="Warranties"
					description="Australian RV Warranty Form"
				/>
				<div className='warranties-padding-wrapper'>
					<div className="warranties-content-container">
						<div id="warranties-col">
							<p id="cont-head">WARRANTIES</p>
							<p id="bold">Please note we are a wholesale only business and do not sell direct to the public.</p>
							<p>The below emails are for trade enquiries only - please do not send orders by the below address.  It is not checked for orders and your order may not be dispatched.</p>
							<div className="selection-container">
								<button id={this.state.isCompany && "selected"} className="select-button-left" onClick={()=> this.setState({ isCompany: !this.state.isCompany })}>Company</button>
								<button id={!this.state.isCompany && "selected"} className="select-button-right" onClick={()=> this.setState({ isCompany: !this.state.isCompany })}>Individual</button>
							</div>
						</div>
						<div id="warranties-form">
							{this.state.isCompany && <><p>Company Name</p><textarea value={this.state.companyName} onChange={(event) => this.setState({ companyName: event.target.value})} id="name-box"></textarea></>}
							<p>Contact Name</p><textarea value={this.state.name} onChange={(event) => this.setState({ name: event.target.value})} id="name-box"></textarea>
							<p>Delivery Address</p><textarea value={this.state.deliveryAddress} onChange={(event) => this.setState({ deliveryAddress: event.target.value})} id="name-box"></textarea>
							<p>Phone</p><textarea value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value})} id="name-box"></textarea>
							<p>Email</p><textarea value={this.state.email} onChange={(event) => this.setState({ email: event.target.value})} id="name-box"></textarea>
							{this.state.isCompany && <><p>Quantity</p><textarea value={this.state.quantity} onChange={(event) => this.setState({ quantity: event.target.value })} id="name-box"></textarea></>}
							{/* <p>Product Description</p><textarea value={this.state.productDescription} onChange={(event) => this.setState({ productDescription: event.target.value})} id="name-box"></textarea> */}
							<p>Serial No</p><textarea value={this.state.serialNumber} onChange={(event) => this.setState({ serialNumber: event.target.value})} id="name-box"></textarea>
							{!this.state.isCompany && <><p>Purchased From</p><textarea value={this.state.purchasedFrom} onChange={(event) => this.setState({ purchasedFrom: event.target.value})} id="name-box"></textarea></>}
							<p>Invoice Number</p><textarea value={this.state.invoiceNumber} onChange={(event) => this.setState({ invoiceNumber: event.target.value})} id="name-box"></textarea>
							<p>Description</p>
							<textarea value={this.state.productDescription} onChange={(event) => this.setState({ productDescription: event.target.value})}  id="large-box"></textarea>
							<button onClick={this.onSendEmail}>Submit Warranty</button>
							{this.state.sent && <span style={{ color: this.state.sent === 'Sent' ? 'green' : 'red' }}>{this.state.sent}</span>}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Warranties;