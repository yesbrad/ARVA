import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import BannerImage from '../../images/BannerImages/Banner6.jpg';

class Contact extends React.Component {
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
							<textarea id="name-box"></textarea>
							<p>Email</p>
							<textarea id="name-box"></textarea>
							<p>Subjectline</p>
							<textarea id="name-box"></textarea>
							<p>Message</p>
							<textarea id="large-box"></textarea>
							<button>Submit</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Contact;