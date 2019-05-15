import firebase from 'firebase';
export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "858671778882"
  });
}