import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDd7c5WB5Z85zwR0ALA5fJQcApv9o_jVQw",
  authDomain: "yiseullemieux.firebaseapp.com",
  databaseURL: "https://yiseullemieux-default-rtdb.firebaseio.com",
  projectId: "yiseullemieux",
  storageBucket: "yiseullemieux.appspot.com",
  messagingSenderId: "284239759923",
  appId: "1:284239759923:web:4d60244e8ede6163633146",
  measurementId: "G-5Y4PLDTE06",
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const database = getDatabase(app);
