import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCkafsQ4-hxT_6rUWNT4uhWskUOxE5Ymx8",
  authDomain: "login-2cc75.firebaseapp.com",
  projectId: "login-2cc75",
  storageBucket: "login-2cc75.appspot.com",
  messagingSenderId: "796281751756",
  appId: "1:796281751756:web:ddb432a74c39fdd2e51a69"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider(); 

export { app, auth, GoogleProvider, FacebookProvider }; 
