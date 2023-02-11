import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCymQZFNpmjiC5aGAC5gT2XSr7Al6CkI60",
  authDomain: "burger-app-3fdb3.firebaseapp.com",
  projectId: "burger-app-3fdb3",
  storageBucket: "burger-app-3fdb3.appspot.com",
  messagingSenderId: "50331515744",
  appId: "1:50331515744:web:acf001fecb83c362687c05",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
