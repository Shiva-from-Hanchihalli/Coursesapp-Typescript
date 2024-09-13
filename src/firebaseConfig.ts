import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2u_dmq5lYnmf7cZNlGdB19Xdq0MeKf0I",
  authDomain: "course-app-118a1.firebaseapp.com",
  projectId: "course-app-118a1",
  storageBucket: "course-app-118a1.appspot.com",
  messagingSenderId: "53795332422",
  appId: "1:53795332422:web:4a5941972824b47c320547",
  measurementId: "G-Q25C220J7C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };