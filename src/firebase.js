import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC-fuiUqf55K2ktnAcO1DhpDR16sXJulaQ",
  authDomain: "namste-startup.firebaseapp.com",
  projectId: "namste-startup",
  storageBucket: "namste-startup.appspot.com",
  messagingSenderId: "123621365835",
  appId: "1:123621365835:web:e80f2bae125de4e13195ce",
  measurementId: "G-KGLMSDR2J4"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
