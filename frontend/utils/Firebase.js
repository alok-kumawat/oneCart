import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-1d26b.firebaseapp.com",
  projectId: "loginonecart-1d26b",
  storageBucket: "loginonecart-1d26b.firebasestorage.app",
  messagingSenderId: "322723337784",
  appId: "1:322723337784:web:811499d19a07813d5ff8cd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}