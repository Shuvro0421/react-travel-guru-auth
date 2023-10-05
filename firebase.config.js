// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXBwiE-pf7rYq82A1cp3KUiXCtJhhd4-U",
  authDomain: "react-travel-guru-auth.firebaseapp.com",
  projectId: "react-travel-guru-auth",
  storageBucket: "react-travel-guru-auth.appspot.com",
  messagingSenderId: "755269476174",
  appId: "1:755269476174:web:1041afa6a82231f973081f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth