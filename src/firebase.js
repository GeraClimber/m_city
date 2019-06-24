import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBH6wvHTL779JnXD8U3rVsLb2TE5uAFygI",
    authDomain: "m-city-53916.firebaseapp.com",
    databaseURL: "https://m-city-53916.firebaseio.com",
    projectId: "m-city-53916",
    storageBucket: "m-city-53916.appspot.com",
    messagingSenderId: "1065194218227",
    appId: "1:1065194218227:web:fe99594c317d707b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}
