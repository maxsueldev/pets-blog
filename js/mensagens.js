import { db } from './firebaseDb.js';
import { collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const artigoId = document.querySelector('#artigoId');
const divComentarios = document.querySelector('#comentarios');

const artigoAtual = artigoId.value;
const arrayComentarios = [];

const consultaComentarios = await getDocs(collection(db, "comentarios"));

consultaComentarios.forEach(doc => arrayComentarios.push(doc.data())); // Adiciona cada objeto de comentário em um Array
arrayComentarios.sort((a, b) => new Date(b.data) - new Date(a.data)); // Ordena os comentários a partir da data de postagem

// Carregar comentários na página
arrayComentarios.forEach(elem => {
    if (elem.artigo == artigoAtual) { // Mostra apenas os comentários que forem do artigo
        const novaDiv = document.createElement('div');
        const container = document.createElement('div');
        const h3 = document.createElement('h3');
        const dataElem = document.createElement('p');
        const mensagemElem = document.createElement('p');

        novaDiv.classList = 'coment';
        dataElem.classList = 'data';

        h3.innerText = elem.nome;
        mensagemElem.innerText = elem.mensagem;

        const data = new Date(elem.data);
        let dia = data.getDate();
        let mes = data.getMonth() + 1;
        const ano = data.getFullYear();

        if (dia < 10) dia = '0' + dia;
        if (mes < 10) mes = '0' + mes;

        const dataFormatada = dia + '/' + mes + '/' + ano;
        dataElem.innerText = dataFormatada;

        container.appendChild(h3);
        container.appendChild(dataElem);

        novaDiv.appendChild(container);
        novaDiv.appendChild(mensagemElem);
        divComentarios.appendChild(novaDiv);
    }
});

// Criar novo comentário 
const btnEnviarFormComent = document.querySelector('#btn-enviar');
const nome = document.querySelector('#nome');
const textareaComentario = document.querySelector('#textarea-comentario');

btnEnviarFormComent.addEventListener('click', e => {
    e.preventDefault();

    if (nome.value != '' && textareaComentario.value != '') {
        salvarComentario(artigoAtual, nome.value, textareaComentario.value);
    }
});

async function salvarComentario(artigoAtual, nome, mensagem) {
    const dataFormatada = formatarDataAtual();

    try {
        const docRef = await addDoc(collection(db, "comentarios"), {
            artigo: artigoAtual,
            nome: nome,
            mensagem: mensagem,
            data: dataFormatada
        });
        console.log("Document written with ID: ", docRef.id);
        await location.reload();

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function formatarDataAtual() {
    const dataAtual = new Date();

    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; // Months start at 0!
    const ano = dataAtual.getFullYear();

    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    return mes + '-' + dia + '-' + ano + ' ' + horas + ':' + minutos + ':' + segundos;
}