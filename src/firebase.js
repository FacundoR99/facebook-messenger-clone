import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyDK9hkxHTPJIimx1BRhLKtcV-9xtvcxGP4",
        authDomain: "facebook-messenger-clone-808d6.firebaseapp.com",
        projectId: "facebook-messenger-clone-808d6",
        storageBucket: "facebook-messenger-clone-808d6.appspot.com",
        messagingSenderId: "299648232979",
        appId: "1:299648232979:web:a32bffc90be801a90999e6",
        measurementId: "G-2KZE6GZG5C"
      
});

const db = firebaseApp.firestore();

export default db;