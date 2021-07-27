import { getFirebase } from 'react-redux-firebase';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';

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

/* ReactDOM.render(
	<ReactReduxFirebaseProvider
		store={store}
		{...rrfProps}
	></ReactReduxFirebaseProvider>,
	document.getElementById('root')
); */

export default store;
