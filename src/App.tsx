import React from 'react';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import Stockists from './screens/Stockists';
import Brands from './screens/Brands';
import Contact from './screens/Contact';
import Admin from './screens/Admin';
import reduxStore from './redux/index';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

function App() {
	return (
		<Provider store={reduxStore}>		
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/brands"><Brands /></Route>
					<Route path="/stockists"><Stockists /></Route>
					<Route path="/contact"><Contact /></Route>
					<Route path="/admin"><Admin /></Route>
				</Switch>
			</Router>
	    </Provider>
  );
}

export default App;
