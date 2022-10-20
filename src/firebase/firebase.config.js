// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCM3XjKYU4huC4BPi6EHE-oZEWuckD2wZE",
    authDomain: "dragon-news-1.firebaseapp.com",
    projectId: "dragon-news-1",
    storageBucket: "dragon-news-1.appspot.com",
    messagingSenderId: "558599864721",
    appId: "1:558599864721:web:bb6842e275af6928399a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;