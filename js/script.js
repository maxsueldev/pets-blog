const menuHamburger = document.querySelector('#hamburger');
const navListDropDown = document.querySelector('#nav-list-dropdown');

menuHamburger.addEventListener('click', () => {
    navListDropDown.classList.toggle('active');
    const isActive = navListDropDown.classList.contains('active');
});