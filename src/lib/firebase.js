// src/lib/firebase.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBGx6-gTqqujwEYQ7jwNR3rcVlfwTuPJkA",
  authDomain: "nexadev-learning-app.firebaseapp.com",
  projectId: "nexadev-learning-app",
  storageBucket: "nexadev-learning-app.firebasestorage.app",
  messagingSenderId: "98238163582",
  appId: "1:98238163582:web:29870216caaec0cd8fc62f",
  measurementId: "G-GGFQW3WYTC"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

export default app;
