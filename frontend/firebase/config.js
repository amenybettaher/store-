import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAUlDYhVir516khOr7uYrL1YUxjm9duB-U",
  authDomain: "mystore-d9697.firebaseapp.com",
  projectId: "mystore-d9697",
  storageBucket: "mystore-d9697.appspot.com",
  messagingSenderId: "710462735070",
  appId: "1:710462735070:web:c34e760f20226c8985784f",

}

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
