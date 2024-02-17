import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBK-e1QASHRip8lL_ppwFAWlbYt27w3L7c",
    authDomain: "pets-blog-b3c40.firebaseapp.com",
    projectId: "pets-blog-b3c40",
    storageBucket: "pets-blog-b3c40.appspot.com",
    messagingSenderId: "55160048143",
    appId: "1:55160048143:web:a93f37a40e21812b0eb17a",
    measurementId: "G-L0G5J3YK77"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};