// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj36xYHoKXwlffo2uMsmcBsgQ8HEh2q64",
  authDomain: "pomodoro-app-25884.firebaseapp.com",
  projectId: "pomodoro-app-25884",
  storageBucket: "pomodoro-app-25884.appspot.com",
  messagingSenderId: "626087071429",
  appId: "1:626087071429:web:54423ca97831df5be6eaac",
  measurementId: "G-H3F9WCNQ53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
