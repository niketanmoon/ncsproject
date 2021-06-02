import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPa_4GV5R0bEXsQtbg6Y0YzXMtzLL0dD0",
  authDomain: "testprepme-8a76b.firebaseapp.com",
  projectId: "testprepme-8a76b",
  storageBucket: "testprepme-8a76b.appspot.com",
  messagingSenderId: "1026662902069",
  appId: "1:1026662902069:web:ec20f3e832903d5142c47c",
  measurementId: "G-5PJJ2QTBMT",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const google_provider = new firebase.auth.GoogleAuthProvider();
const fb_provider = new firebase.auth.FacebookAuthProvider();

export { auth, google_provider, fb_provider };
