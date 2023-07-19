import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCFPFUyFOB0N_LB57bglOBeu0Anmu0JRp8",
  authDomain: "first-project-9cd22.firebaseapp.com",
  projectId: "first-project-9cd22",
  storageBucket: "first-project-9cd22.appspot.com",
  messagingSenderId: "923030298002",
  appId: "1:923030298002:web:2b307996504395c682354b",
  measurementId: "G-TEPCRY34KP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export default auth;