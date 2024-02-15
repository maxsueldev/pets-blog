// Dropdown menu / menu Hamburger

const menuHamburger = document.querySelector('#hamburger');
const navListDropDown = document.querySelector('#nav-list-dropdown');

menuHamburger.addEventListener('click', () => {
    navListDropDown.classList.toggle('active');
    menuHamburger.classList.toggle('active');
    const isActive = navListDropDown.classList.contains('active');
});

// Comentários de artigo

const btnEnviarFormComent = document.querySelector('#btn-enviar');
const nome = document.querySelector('#nome');
const textareaComentario = document.querySelector('#textarea-comentario');
const divComentarios = document.querySelector('#comentarios');

btnEnviarFormComent.addEventListener('textInput', e => {
    e.preventDefault();

    if(nome.value != '' && textareaComentario.value != '') {
        const novaDiv = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        novaDiv.classList = 'coment';
        h3.innerText = nome.value;
        p.innerText = textareaComentario.value;

        novaDiv.appendChild(h3);
        novaDiv.appendChild(p);
        
        divComentarios.appendChild(novaDiv);

        nome.value = '';
        textareaComentario.value = '';
    }
});