import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu_goN2yQ4hm4FdSNjkRdVOBLbPhLePIs",
  authDomain: "vue-10-projects.firebaseapp.com",
  projectId: "vue-10-projects",
  storageBucket: "vue-10-projects.appspot.com",
  messagingSenderId: "504732560938",
  appId: "1:504732560938:web:53119cf1cd64cb80481d53",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
