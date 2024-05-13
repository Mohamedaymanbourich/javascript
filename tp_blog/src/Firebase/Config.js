import firebase from 'firebase/app' // the core part of firebase package
// Then we import any features from firebase that we want to use
// in our case it is cloud firestore
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiWfgRMNRjF6fU0z5LICnDTkdJSmUm1sw",
    authDomain: "blog-7c829.firebaseapp.com",
    projectId: "blog-7c829",
    storageBucket: "blog-7c829.appspot.com",
    messagingSenderId: "839225819076",
    appId: "1:839225819076:web:742d64a67394d5aa1b6e91",
    measurementId: "G-GYESWVC5D0"
  };

  // Step 1 : init firebase
// we use the firebaseConfig to init the connection to our firebase backend
firebase.initializeApp(firebaseConfig)
// Step 2 : Init the firestore service
// If we want to do any communication with the firestore db (eg. add documents)
// we can use projectFirestore variable
const projectFirestore = firebase.firestore()
//Step 3 : Export projectFirestore
// This will enable the use the firebase in different components
export {projectFirestore}