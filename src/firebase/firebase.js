import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyADXuj5r132m4Pqv1GubBhJ8LeCNazl7tk",
  authDomain: "expensicon.firebaseapp.com",
  databaseURL: "https://expensicon.firebaseio.com",
  projectId: "expensicon",
  storageBucket: "expensicon.appspot.com",
  messagingSenderId: "210315258479",
  appId: "1:210315258479:web:54ffa38a2373ce2c663b9a",
  measurementId: "G-8XRXBTW3SX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();
export { firebase, database as default };