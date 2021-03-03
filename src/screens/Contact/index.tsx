import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import BannerImage from '../../images/BannerImages/Banner6.jpg';
import { apiURL } from '../../api';
const sgMail = require('@sendgrid/mail')

interface IState {
	sent: string,
	message: string,
	subject: string,
	email: string,
	name: string,
}

class Contact extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			sent: '',
			message: '',
			subject: '',
			email: '',
			name:'',
		}
	}

	onSendEmail = async () => {
		if (this.state.sent === 'Sending') return;

		this.setState({ sent: 'Sending' });

		const { message, email, name, subject } = this.state;

		if (message === '' || email === '' || name === '' || subject === '') {
			this.setState({ sent: '*Missing Fields' });
			return;
		}

		try {	
			await fetch(`${apiURL}/sendMail`, {
				method: 'POST',
				body: JSON.stringify({
					message,
					email,
					subject,
					name,
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
			<div className='contact-main-container'>
				<Header />
				<Banner
					backgroundImage={BannerImage}
					title="Contact Us"
					description="Please get in touch with us if you have any questions!"
				/>
				<div className='contact-padding-wrapper'>
					<div className="contact-content-container">
						<div id="contact-col">
							<p id="cont-head">CONTACT US</p>
							<p id="bold">Please note we are a wholesale only business and do not sell direct to the public.</p>
							<p>The below emails are for trade enquiries only - please do not send orders by the below address.  It is not checked for orders and your order may not be dispatched.</p>
							<p id="bold">Australian RV Accessories</p>
							<p>Cnr Gifford Street and Burwood Hwy, Ferntree Gully, 3156</p>
							<p>Phone: 03 9758 1761</p>
							<p>Email: enquiries@australianrvaccessories.com.au</p>
							<p id="bold">Office Hours:</p>
							<p>Monday – Friday 9am – 5pm</p>
							<p id="bold">CEO</p>
							<p>Rod Francis</p>
							<p>Email: rod.francis@australianrvaccessories.com.au</p>
							<p>Phone: 03 9758 1761</p>
							<p id="bold">General Manager and OEM Sales</p>
							<p>Matt Durdin</p>
							<p>Email: matt@australianrvaccessories.com.au</p>
							<p>Phone: 0400 176 680 </p>
							<p id="bold">Sales Manager</p>
							<p>Allan Gibbs</p>
							<p>Email: allan@australianrvaccessories.com.au</p>
							<p>Phone: 0488 550 100 </p>
							<p id="bold">Sales Manager</p>
							<p>Mark Craig</p>
							<p>Email: mark@australianrvaccessories.com.au </p>
							<p>Phone: 0409985147</p>
						</div>
						<div id="contact-form">
							<p>Name</p>
							<textarea value={this.state.name} onChange={(event) => this.setState({ name: event.target.value})} id="name-box"></textarea>
							<p>Email</p>
							<textarea value={this.state.email} onChange={(event) => this.setState({ email: event.target.value})}  id="name-box"></textarea>
							<p>Subject Line</p>
							<textarea value={this.state.subject} onChange={(event) => this.setState({ subject: event.target.value})}  id="name-box"></textarea>
							<p>Message</p>
							<textarea value={this.state.message} onChange={(event) => this.setState({ message: event.target.value})}  id="large-box"></textarea>
							<button onClick={this.onSendEmail}>Submit</button>
							{this.state.sent && <span style={{ color: this.state.sent === 'Sent' ? 'green' : 'red' }}>{this.state.sent}</span>}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Contact;