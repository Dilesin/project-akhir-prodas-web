const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuMobile = document.getElementById('mobileMenu');


// Ketika hamburger menu di-klik
hamburgerMenu.addEventListener('click', function () {
    // Toggle class 'active' pada elemen hamburger-menu
    this.classList.toggle('active');

    menuMobile.classList.toggle('active');
});