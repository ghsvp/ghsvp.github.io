import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBbwQPfziPLbFpZNN3X0xOOQMKoWJvkums",
  authDomain: "ghsvp-af253.firebaseapp.com",
  projectId: "ghsvp-af253",
  storageBucket: "ghsvp-af253.appspot.com",
  messagingSenderId: "164668868139",
  appId: "1:164668868139:web:69f1a89fe9990033688c6e",
  measurementId: "G-430SQ3HDJ9",
};

export const app = initializeApp(firebaseConfig);
export const analytics = isSupported().then((supported) =>
  supported ? getAnalytics(app) : undefined,
);
export const functions = getFunctions(app);
export const contactUs = httpsCallable(functions, "contact_us");
