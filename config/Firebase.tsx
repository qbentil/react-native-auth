import "firebase/auth";

import firebase from 'firebase/app'

// Optionally import the services that you want to use

//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

require('firebase/firestore');

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCMASf_LOs7SgO9c_h3wsPz66uKZh6Q6w4",
    authDomain: "igclone-9a710.firebaseapp.com",
    databaseURL: 'https://igclone-9a710.firebaseio.com',
    projectId: "igclone-9a710",
    storageBucket: "igclone-9a710.appspot.com",
    messagingSenderId: "276311385235",
    appId: "1:276311385235:web:9e7b4076475eb89e421966",
    // measurementId: 'G-measurement-id',
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

