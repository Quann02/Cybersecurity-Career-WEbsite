// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import Firebase Authentication

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdM4L0DllF_-jPfKXXGf74Al3PuH4SoVo",
  authDomain: "webshar-phu-quan.firebaseapp.com",
  projectId: "webshar-phu-quan",
  storageBucket: "webshar-phu-quan.firebasestorage.app",
  messagingSenderId: "1022306753571",
  appId: "1:1022306753571:web:8cddb3ea5221d098ce2596"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth }; // Export auth instance for use in your app
