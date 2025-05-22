// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyANt89O6sROXeKENXru9atnEek4YcYjumg",
  authDomain: "authentication-7ff67.firebaseapp.com",
  projectId: "authentication-7ff67",
  storageBucket: "authentication-7ff67.firebasestorage.app",
  messagingSenderId: "249964546094",
  appId: "1:249964546094:web:2d9771477ec5febc8cf7bf",
  measurementId: "G-86DBF8FDHZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)
 console.log("data getting from getAuth",auth);
 
 export const googleProvider=new GoogleAuthProvider()