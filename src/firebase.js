import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDjpVJEZgtvNaAogcExdEAoYvMc5JZfQ3U",
    authDomain: "password-generator-1fcb3.firebaseapp.com",
    projectId: "password-generator-1fcb3",
    storageBucket: "password-generator-1fcb3.appspot.com",
    messagingSenderId: "490117707090",
    appId: "1:490117707090:web:f090d1386e0a328f44f68b",
    measurementId: "G-FEYF4WG6MY"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;