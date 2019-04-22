import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import DashBoardPage from '../components/DashBoardPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import GeneralTasksPage from '../components/GeneralTasksPage';
import SalesTasksPage from '../components/SalesTasksPage';

const history = createHistory();

export default () => (
	<Router history={history}>
		<div>
			<Header />
			<Switch>
				<Route path='/' component={LoginPage} exact={true} />
				<Route path='/dashboard' component={DashBoardPage} />
				<Route path='/general-tasks-page' component={GeneralTasksPage} />
				<Route path='/sales-tasks-page' component={SalesTasksPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);
