import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


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

const divComentarios = document.querySelector('#comentarios');
const consultaComentarios = await getDocs(collection(db, "comentarios"));

consultaComentarios.forEach((doc) => {
    const novaDiv = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        novaDiv.classList = 'coment';
        h3.innerText = doc.data().nome;
        p.innerText = doc.data().mensagem;

        novaDiv.appendChild(h3);
        novaDiv.appendChild(p);
        
        divComentarios.appendChild(novaDiv);
});