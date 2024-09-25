import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2lt5xxX451c9P4zfOi-rdiltZMu-svaY",
  authDomain: "sketchpad-app-b88a0.firebaseapp.com",
  projectId: "sketchpad-app-b88a0",
  storageBucket: "sketchpad-app-b88a0.appspot.com",
  messagingSenderId: "1052234948348",
  appId: "1:1052234948348:web:5a0cb413895716e2da0179",
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig); // Initialize a new app if none exist
} else {
  app = getApps()[0]; // Use the existing app
}

export const storage = getStorage(app);
export const db = getFirestore(app);
