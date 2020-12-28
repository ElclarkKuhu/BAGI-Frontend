if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
    "apiKey": "AIzaSyAU0tkeXrYQtdB2-Zm8HkjS_AYfXcyAFXc",
    "authDomain": "bagi-me.firebaseapp.com",
    "databaseURL": "https://bagi-me.firebaseio.com",
    "projectId": "bagi-me",
    "storageBucket": "bagi-me.appspot.com",
    "messagingSenderId": "381581983737",
    "appId": "1:381581983737:web:b2428c8e0a9d85c9afc728",
    "measurementId": "G-3S4N3F2T08"
});