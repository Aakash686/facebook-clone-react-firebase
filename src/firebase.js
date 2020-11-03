import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtwgoygsWtSiQ9cruFPpQpKScSf1PmviU",
  authDomain: "facebook-messenger-clone-7ef8e.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-7ef8e.firebaseio.com",
  projectId: "facebook-messenger-clone-7ef8e",
  storageBucket: "facebook-messenger-clone-7ef8e.appspot.com",
  messagingSenderId: "306401811371",
  appId: "1:306401811371:web:418a7b637457db2b5c50ee",
  measurementId: "G-VBEJS01QHC"
})

const db = firebaseApp.firestore();

export default db;