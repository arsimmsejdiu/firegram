import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDkXmSKYBUKl1iUwnHBZz7GQ7neDGY1vIU",
  authDomain: "firegram-73ba9.firebaseapp.com",
  databaseURL: "https://firegram-73ba9.firebaseio.com",
  projectId: "firegram-73ba9",
  storageBucket: "firegram-73ba9.appspot.com",
  messagingSenderId: "164917848379",
  appId: "1:164917848379:web:9b1f4f166c7cb0ed38af1e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
