import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvLE1YaGEmzwl4aDmfhAolk6k7PhULmyM",
  authDomain: "reels-react.firebaseapp.com",
  databaseURL: "https://reels-react.firebaseio.com",
  projectId: "reels-react",
  storageBucket: "reels-react.appspot.com",
  messagingSenderId: "808108051987",
  appId: "1:808108051987:web:97e61f64d640e00ab7f9e6",
  measurementId: "G-GVM1KGL6PB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebaseApp.firestore();
