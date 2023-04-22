import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZHYQkKBMi8B9x3OqE50NH-XsvcWD4IXI",
    authDomain: "collabin-206e5.firebaseapp.com",
    projectId: "collabin-206e5",
    storageBucket: "collabin-206e5.appspot.com",
    messagingSenderId: "260516666635",
    appId: "1:260516666635:web:eac59292577bd589e0d60e",
    measurementId: "G-FK257CR7ZF"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  const auth = getAuth(app);
  const storage = getStorage(app);
  export { db,storage,auth } 


