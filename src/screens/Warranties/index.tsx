import React from 'react';
import './index.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import BannerImage from '../../images/ausroad.jpg';
import { apiURL } from '../../api';
const sgMail = require('@sendgrid/mail')

interface IState {
	sent: string,
	message: string,
	subject: string,
	email: string,
	name: string,
}

class Warranties extends React.Component<{}, IState> {
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
						</div>
						<div id="warranties-form">
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

export default Warranties;