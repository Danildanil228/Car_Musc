document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('draggable', 'false');
    });
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('menu');
    const nav = document.getElementById('nav');

    burgerMenu.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});
