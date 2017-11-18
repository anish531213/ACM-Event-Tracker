import * as firebase from 'firebase';
const config = {
	apiKey: "AIzaSyCbINkjV9E6gcMTyKoNKzjuFx7QNjrJ6OM",
	authDomain: "acm-event-tracker.firebaseapp.com",
	databaseURL: "https://acm-event-tracker.firebaseio.com",
	projectId: "acm-event-tracker",
	storageBucket: "acm-event-tracker.appspot.com",
	messagingSenderId: "872526494413"
};
firebase.initializeApp(config);
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage().ref();
