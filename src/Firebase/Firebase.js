import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: 'react-redux-todo-auth.firebaseapp.com',
	projectId: 'react-redux-todo-auth',
	storageBucket: 'react-redux-todo-auth.appspot.com',
	messagingSenderId: '332001715234',
	appId: '1:332001715234:web:a19d9e8bf11d2f72b9567b',
	measurementId: 'G-Y23SZDYEGN'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
