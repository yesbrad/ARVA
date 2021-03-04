import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import Stockists from './screens/Stockists';
import Brands from './screens/Brands';
import Contact from './screens/Contact';
import Warranties from './screens/Warranties';
import Admin from './screens/Admin';
import reduxStore from './redux/index';
import { useTransition, animated, config } from 'react-spring'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';
import Brochures from './screens/Brochures';
import Catalog from './screens/Catalog';

const AppAnimate = () => {
	const location = useLocation();
	const transitions = useTransition(location, location => location.pathname, {
	  from: { opacity: 0, transform: 'scale(0)'},
	  enter: { opacity: 1, transform: 'scale(1)'},
		leave: { opacity: 0, transform: 'scale(0)'},
		config: config.molasses,
	})

	return transitions.map(({ item: location, props, key }) => (
		<Switch location={location}>
			<Route exact path="/" component={Home} />
			<Route path="/brands" component={Brands}/>
			<Route path="/stockists"  component={Stockists} />
			<Route path="/contact" component={Contact} />
			<Route path="/warranties" component={Warranties}/>
			<Route path="/brochures" component={Brochures} />
			<Route path="/catalogue" component={Catalog}/>
			<Route path="/admin" component={Admin}/>
		</Switch>
	));
}

const App = () => (
	<Provider store={reduxStore}>		
		<Router>
			<AppAnimate />
		</Router>
	</Provider>
)

export default App;
