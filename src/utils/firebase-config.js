import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAjVt1HpsMqF6hOR6IjD_RW2KGjHM2anSg",
  authDomain: "netflix-clone-ace62.firebaseapp.com",
  projectId: "netflix-clone-ace62",
  storageBucket: "netflix-clone-ace62.appspot.com",
  messagingSenderId: "983077638846",
  appId: "1:983077638846:web:a5846976f74877a83804ef",
  measurementId: "G-69ST31W40L"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)

