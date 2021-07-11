import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAtmNlLsLUrJWtXt86mAV45DrNAsbZI2Tk",
  authDomain: "snake-game-server.firebaseapp.com",
  projectId: "snake-game-server",
  storageBucket: "snake-game-server.appspot.com",
  messagingSenderId: "252952166328",
  appId: "1:252952166328:web:cc9f39b1968d8a7d2d994d",
  measurementId: "G-FGZCH1K23G",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export { firebase };

export const auth = firebase.auth;
export const db = firebase.firestore();
