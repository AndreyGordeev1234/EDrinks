import firebase from 'firebase/app'

export function firebaseInit() {
  firebase.initializeApp({
    apiKey: config.FIREBASE_KEY,
    authDomain: "edrinks-app.firebaseapp.com",
    databaseURL: "https://edrinks-app.firebaseio.com",
    projectId: "edrinks-app",
    storageBucket: "edrinks-app.appspot.com",
    messagingSenderId: "1074756539433",
    appId: "1:1074756539433:web:d0f1143103d9a23547f838"
  });
}