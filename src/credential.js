// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXluPq3JS7Oec4UfT2osEG9XW1zdDi1xE",
  authDomain: "sanos-y-salvos-user.firebaseapp.com",
  projectId: "sanos-y-salvos-user",
  storageBucket: "sanos-y-salvos-user.firebasestorage.app",
  messagingSenderId: "913487633578",
  appId: "1:913487633578:web:c5fde6dae98781524a44d3",
  measurementId: "G-CHGRZYC9GG"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export const auth = getAuth(appFirebase);
export const db = getFirestore(appFirebase);
export default appFirebase;

