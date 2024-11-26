// Typed.js for text animation
var typed = new Typed('#element', {
    strings: ['I am a software engineer'],
    typeSpeed: 50,
});

// Mobile menu toggle functionality
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('show');
});
