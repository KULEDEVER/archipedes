import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB-_45fF191VSh1dTHrYGvUrFDjEXrrVTA",
  authDomain: "archipedes-bd1f2.firebaseapp.com",
  databaseURL: "https://archipedes-bd1f2-default-rtdb.firebaseio.com",
  projectId: "archipedes-bd1f2",
  storageBucket: "archipedes-bd1f2.firebasestorage.app",
  messagingSenderId: "1063698348131",
  appId: "1:1063698348131:web:90db8d41dfbd3464476056",
  measurementId: "G-JQMJVKPLPG"
};

// Init
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);