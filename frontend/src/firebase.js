
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the authentication module
import { getFirestore } from "firebase/firestore"; // Import the Firestore module

const firebaseConfig = {
  apiKey: "AIzaSyDOzYnRG82ql3IE8oScspw_L6DYMb_mexY",
  authDomain: "yadavporfolio.firebaseapp.com",
  projectId: "yadavporfolio",
  storageBucket: "yadavporfolio.appspot.com",
  messagingSenderId: "1028379883761",
  appId: "1:1028379883761:web:10091421d252fe25c51150",
  measurementId: "G-FV5PYW7ZB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the authentication and firestore instances
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app; // Export the Firebase app instance
