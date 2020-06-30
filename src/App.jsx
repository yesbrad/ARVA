import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import Stockists from './screens/Stockists';
import Brands from './screens/Brands';
import Contact from './screens/Contact';
import Admin from './screens/Admin';
import reduxStore from './redux/index';
import { useTransition, animated } from 'react-spring'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';
import Brochures from './screens/Brochures';

const AppAnimate = () => {
	const location = useLocation();
	const transitions = useTransition(location, location => location.pathname, {
	  from: { opacity: 0 },
	  enter: { opacity: 1 },
	  leave: { opacity: 1 },
	})

	return transitions.map(({ item: location, props, key }) => (
		<animated.div key={key} style={props}>
				<Switch location={location}>
					<Route exact path="/" component={Home} />
					<Route path="/brands" component={Brands}/>
					<Route path="/stockists"  component={Stockists} />
					<Route path="/contact" component={Contact}/>
					<Route path="/brochures"  component={Brochures}/>
					<Route path="/admin" component={Admin}/>
				</Switch>
		</animated.div>
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
