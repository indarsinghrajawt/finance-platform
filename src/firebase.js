import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxGDX-i8pjdTdbeyUW0xIB73ON3YciO8Q",
  authDomain: "ai-finance-platform-275e3.firebaseapp.com",
  projectId: "ai-finance-platform-275e3",
  storageBucket: "ai-finance-platform-275e3.firebasestorage.app",
  messagingSenderId: "1057700643413",
  appId: "1:1057700643413:web:dff339ebc08fae4bba0adc",
  measurementId: "G-ZGJKJMQ7NJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;