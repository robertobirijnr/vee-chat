import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAoWQ2Md5O76TAkYrxYCkAlVucJR5Sfo7M",
  authDomain: "vee-chat.firebaseapp.com",
  databaseURL: "https://vee-chat.firebaseio.com",
  projectId: "vee-chat",
  storageBucket: "vee-chat.appspot.com",
  messagingSenderId: "248818321338",
  appId: "1:248818321338:web:5a11bd05c5661c676b3f83",
  measurementId: "G-JHNYZBG90X",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore();
