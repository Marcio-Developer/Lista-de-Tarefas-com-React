import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBNYCJssK3pvw6X5AeiM1onXCcKPDac4-Y",
  authDomain: "curso-aef26.firebaseapp.com",
  projectId: "curso-aef26",
  storageBucket: "curso-aef26.appspot.com",
  messagingSenderId: "250218315574",
  appId: "1:250218315574:web:37a6055d8bd687d1b8fd97",
  measurementId: "G-KD7BXHYE7M"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };