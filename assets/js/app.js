const menuToggle = document.querySelector('.menu-toggle input');
const Nav = document.querySelector('header nav ul');

menuToggle.addEventListener('click', function (){
    Nav.classList.toggle('geser');
    console.log('GESER');
});