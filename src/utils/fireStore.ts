import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDKuHHtajNqGg4CuTmEPSawtTez3VUNR60',
  authDomain: 'avendingmachine-a721c.firebaseapp.com',
  projectId: 'avendingmachine-a721c',
  storageBucket: 'avendingmachine-a721c.appspot.com',
  messagingSenderId: '361152931733',
  appId: '1:361152931733:web:acc887224df21c4358789c',
  measurementId: 'G-K1E2MQSJ6G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export modules:
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
