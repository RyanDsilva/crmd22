import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAm1-vHKXbmOrngPUa87WW3vdyYGicMgX0",
  authDomain: "crmd-78b45.firebaseapp.com",
  projectId: "crmd-78b45",
  storageBucket: "crmd-78b45.appspot.com",
  messagingSenderId: "309203161114",
  appId: "1:309203161114:web:e1f4d504d8ee6109bd41a3",
  measurementId: "G-B9R4X2LBYM"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

const scores = db.collection('scores');

export { db, auth, currentUser, scores };