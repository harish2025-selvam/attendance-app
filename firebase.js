// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword as _createUser,
  signInWithEmailAndPassword as _signIn,
  signOut as _signOut,
  onAuthStateChanged as _onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyAIcZ9ywKzVdDVSCzSco8hdeet-WEq6eTo",
  authDomain: "attendence-app-fbeaf.firebaseapp.com",
  projectId: "attendence-app-fbeaf",
  storageBucket: "attendence-app-fbeaf.firebasestorage.app",
  messagingSenderId: "1028478992092",
  appId: "1:1028478992092:web:ff055350325acd2654be19"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function signUp(email, password) { return _createUser(auth, email, password); }
function signIn(email, password) { return _signIn(auth, email, password); }
function signOutUser() { return _signOut(auth); }
function onAuthChanged(cb) { return _onAuthStateChanged(auth, cb); }

export { auth, db, signUp, signIn, signOutUser, onAuthChanged };
