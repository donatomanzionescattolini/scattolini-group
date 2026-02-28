// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6uofFXTkiOO3s5IcTjHraiRbALCLCBLs",
    authDomain: "pagina-fe39a.firebaseapp.com",
    databaseURL: "https://pagina-fe39a-default-rtdb.firebaseio.com",
    projectId: "pagina-fe39a",
    storageBucket: "pagina-fe39a.firebasestorage.app",
    messagingSenderId: "306316992041",
    appId: "1:306316992041:web:5f7237faa7e35f2d040638",
    measurementId: "G-1CTK7RN67J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
