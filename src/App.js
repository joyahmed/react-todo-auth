import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/layout/Layout';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';
import Home from './containers/Home/Home';
import Todos from './containers/Todos/Todos';

const App = () => {
	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/todos" component={Todos} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={SignUp} />
				<Redirect to="/" />
			</Switch>
		</Layout>
	);
};

export default App;
