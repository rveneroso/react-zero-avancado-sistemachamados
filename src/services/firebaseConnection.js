import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCmRavJwu_0VqazTrStinwaf5kfUEmQ_GA",
    authDomain: "tickets-61e02.firebaseapp.com",
    projectId: "tickets-61e02",
    storageBucket: "tickets-61e02.firebasestorage.app",
    messagingSenderId: "392814660007",
    appId: "1:392814660007:web:e87ffc13d74a5ddf104e82",
    measurementId: "G-LWLSDHB57F"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
