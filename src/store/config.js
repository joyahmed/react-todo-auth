import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app';

/* import 'firebase/firestore';
import 'firebase/auth'; */

import store from './store';

const rrfConfig = {
	userProfile: 'users',
	attachAuthIsReady: true,
	useFirestoreForProfile: true
	// Firestore for Profile instead of Realtime DB
};
const config = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance // <- needed if using firestore
};

export default config;
