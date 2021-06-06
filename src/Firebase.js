import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAa0l9-PkJRZiw9vv6KhaCxC8-rakT6SRk",
    authDomain: "dr-carcare.firebaseapp.com",
    projectId: "dr-carcare",
    storageBucket: "dr-carcare.appspot.com",
    messagingSenderId: "1049793109313",
    appId: "1:1049793109313:web:bae5042a88190fafce55c0"
  };
  // Initialize Firebase
  const FirebaseApp=firebase.initializeApp(firebaseConfig);
  export default FirebaseApp;