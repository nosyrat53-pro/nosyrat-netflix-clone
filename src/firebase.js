// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvhVPDCfhSwwSTlO0cLw5Sx8I9I9ixt9w",
  authDomain: "nosyrat-netflix-clone.firebaseapp.com",
  projectId: "nosyrat-netflix-clone",
  storageBucket: "nosyrat-netflix-clone.appspot.com",
  messagingSenderId: "257867805799",
  appId: "1:257867805799:web:29b048e2465aafa4ccd0c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

export {auth};
export default db;