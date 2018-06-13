import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';

import PageHeader from './screens/PageLayout/PageHeader';
import PageFooter from './screens/PageLayout/PageFooter';

import Home from './screens/Home';
import Home2 from './screens/Home2';

export default () => (
  <Router>
    <Switch>
	  <App inline={true} centered={false}>
		<Box colorIndex="neutral-1">
		  <PageHeader/>
		  <Route exact path="/" component={Home}/>
		  <Route exact path="/Home2" component={Home2}/>
		  <PageFooter/>
		 </Box>
	  </App>
    </Switch>
  </Router>
);
