import React from 'react';
import './index.css';
import AdminStockists from './Stockists';
import AdminBrands from './Brands';
import AdminNewProducts from './NewProducts';
import AdminBrochures from './Brochures';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, Switch, Route } from 'react-router-dom';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_AUKEY,
    authDomain: "arva-3193d.firebaseapp.com",
    databaseURL: "https://arva-3193d.firebaseio.com",
    projectId: "arva-3193d",
    storageBucket: "arva-3193d.appspot.com",
    messagingSenderId: process.env.REACT_APP_SENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREID
};


firebase.initializeApp(firebaseConfig);

export interface User {
	email: string,
	uid: string,
	token: string
}

interface IState {
	loggedIn: boolean,
	user: User | null,
	emailInput: string,
	passwordInput: string,
	loginError: string,
	loggingIn: boolean,
}

class Admin extends React.Component<{}, IState> {

	constructor(props: any) {
		super(props);
		this.state = {
			loggedIn: false,
			user: null,
			emailInput: 'g@g.com',
			passwordInput: 'password',
			loginError: '',
			loggingIn: false,
		}

		console.log(process.env);

	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(async(user) => {
			if (user) {
				try {
					const token = await user.getIdToken();
					
					this.setState({
						loggedIn: true,
						user: {
							email: String(user.email),
							uid: user.uid,
							token: token
						},
						loginError: ''
					})
				} catch {
					this.setState({ loggedIn: false, user: null, loginError: 'Could not fetch Token' })
				}
			} else {
				this.setState({ loggedIn: false, user: null })
			}
		});
	}

	signIn = async () => {
		console.log('Signing IN');
		this.setState({ loggingIn: true });
		try {
			const response = await firebase.auth().signInWithEmailAndPassword(this.state.emailInput, this.state.passwordInput)
            console.log("Admin -> signIn -> response", response)
		} catch (err) {
			console.log(err);
			this.setState({ loginError:  String(err.code).replace('auth/' , '') })
		}
		this.setState({ loggingIn: false });
	}

	signOut = () => {
		firebase.auth().signOut();
	}

	render(){
		return(
			<div className='admin-main-container'>
				{this.state.user ? <div>
					<nav className="admin-nav">
						<div id="admin-nav-logo"></div>
						<Link id="admin-nav-link" to="/admin" >NEW PRODUCTS</Link>
						<Link id="admin-nav-link" to="/admin/stockists" >STOCKISTS</Link>
						<Link id="admin-nav-link" to="/admin/brands" >BRANDS</Link>
						<Link id="admin-nav-link" to="/admin/brochures" >BROCHURES</Link>
						<button id="admin-nav-signout" onClick={() => this.signOut()}>SIGN OUT</button>
					</nav>
					<Switch>
						<Route path="/admin/stockists">
							<AdminStockists user={this.state.user} />
						</Route>
						<Route path="/admin/brands">
							<AdminBrands user={this.state.user} />
						</Route>
						<Route path="/admin/brochures">
							<AdminBrochures user={this.state.user} />
						</Route>
						<Route path="/admin">
							<AdminNewProducts user={this.state.user} />
						</Route>
					</Switch>
				</div> :
				<div className="admin-login-container">
					<img src={require('../../images/Logo.png')}></img>
					<input value={this.state.emailInput} onChange={res => this.setState({ emailInput: res.target.value })}></input>
					<input type="password" value={this.state.passwordInput} onChange={res => this.setState({ passwordInput: res.target.value })}></input>
					<button type="submit" onClick={() => this.signIn()}>{this.state.loggingIn ? 'Logging In' : 'Login'}</button>
					{this.state.loginError && < span > { this.state.loginError }</span>}
				</div>}
			</div>
		);
	}
}

export default Admin;