const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('show');
    navbar.classList.toggle('show');
    console.log('você clicoi')
});