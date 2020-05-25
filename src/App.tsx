import React from 'react';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Brands from './screens/Brands';
import Contact from './screens/Contact';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

function App() {
  return (
	  <Router>
	  	<Switch>
		  	<Route exact path="/" component={Home} />
			<Route path="/about-us"><AboutUs /></Route>
			<Route path="/brands"><Brands /></Route>
			<Route path="/contact"><Contact /></Route>
		</Switch>
	  </Router>
  );
}

export default App;
