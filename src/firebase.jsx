import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2IajeN7YXKXcFkDPN_iIgXcDC4apS9E0",
  authDomain: "login-837c2.firebaseapp.com",
  projectId: "login-837c2",
  storageBucket: "login-837c2.firebasestorage.app",
  messagingSenderId: "327899420071",
  appId: "1:327899420071:web:04759e2f1e60258ca59282",
  measurementId: "G-PCVFD9XMKR"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
