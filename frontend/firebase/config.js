import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUlDYhVir516khOr7uYrL1YUxjm9duB-U",
  authDomain: "mystore-d9697.firebaseapp.com",
  projectId: "mystore-d9697",
  storageBucket: "mystore-d9697.appspot.com",
  messagingSenderId: "710462735070",
  appId: "1:710462735070:web:c34e760f20226c8985784f",

};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider()

export { app, auth, GoogleProvider, FacebookProvider }
