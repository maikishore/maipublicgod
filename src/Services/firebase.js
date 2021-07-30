import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.React_APP_FIREBASE_API_KEY,
  authDomain: process.env.React_authDomain,
  projectId: process.env.React_projectId,
  storageBucket: process.env.React_storageBucket,
  messagingSenderId: process.env.React_messagingSenderId,
  appId: process.env.React_appId,
  measurementId: process.env.React_measurementId,
});

export const auth=app.auth()
export default app