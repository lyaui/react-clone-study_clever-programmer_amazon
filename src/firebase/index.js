import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDcjqCereBIyPecv9QqVYUb6TxmXo8yVw8',
  authDomain: 'clone-93174.firebaseapp.com',
  projectId: 'clone-93174',
  storageBucket: 'clone-93174.appspot.com',
  messagingSenderId: '540425660175',
  appId: '1:540425660175:web:fbca38973689df2ac1407a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
