import firebase from "firebase/compat";
// import {getAnalytics} from "firebase/analytics";
import * as dotenv from "dotenv";

dotenv.config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env["REACT_APP_API_KEY"],
  authDomain: process.env["REACT_APP_AUTH_DOMAIN"],
  projectId: process.env["REACT_APP_PROJECT_ID"],
  storageBucket: process.env["REACT_APP_STORAGE_BUCKET"],
  messagingSenderId: process.env["REACT_APP_MESSAGING_SENDER_ID"],
  appId: process.env["REACT_APP_APP_ID"],
  measurementId: process.env["REACT_APP_MEASUREMENT_ID"],
};

// const app = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
