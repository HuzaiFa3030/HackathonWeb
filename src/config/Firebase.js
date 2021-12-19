import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCFd4b29nqzW0Ik7OZIDpiaMcWLBlVa-hE",
    authDomain: "khana-sab-k-liye-87767.firebaseapp.com",
    projectId: "khana-sab-k-liye-87767",
    storageBucket: "khana-sab-k-liye-87767.appspot.com",
    messagingSenderId: "1048039823465",
    appId: "1:1048039823465:web:b8ec135d0a70e9eee9eaf8",
    measurementId: "G-RRQ98YH9YT"
};

const app = initializeApp(firebaseConfig);
export const Authentication = getAuth();
export const db = getFirestore(app);