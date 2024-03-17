import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider(); 

export { app, auth, GoogleProvider, FacebookProvider }; 
