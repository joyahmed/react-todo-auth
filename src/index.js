import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import theme from './utils/theme';
import GlobalStyles from './utils/global';

import App from './App';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { getFirestore, createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app';

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;

const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
	)
);

const rrfConfig = {
	userProfile: 'users',
	attachAuthIsReady: true,
	useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider store={store} {...rrfProps}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<>
						<App />
						<GlobalStyles />
					</>
				</ThemeProvider>
			</BrowserRouter>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
);
