document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('burger-menu').addEventListener('click', function() {
        var burgerNav = document.getElementById('burger-nav');
        if (burgerNav.style.display === 'none') {
            burgerNav.style.display = 'flex';
            burgerNav.style.position = 'absolute';
            burgerNav.style.backgroundColor = '#000';
            burgerNav.style.width = '100%';
            burgerNav.style.left = '0';
            burgerNav.style.top = '150px';
            burgerNav.style.padding = '50px';
        } else {
            burgerNav.style.display = 'none';
        }
    });

    // Ajout d'un écouteur d'événements pour le redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        var burgerNav = document.getElementById('burger-nav');
        if (window.innerWidth > 760) {
            burgerNav.style.display = 'none';
        }
    });

    var navLinks = document.querySelectorAll('header ul li a');

navLinks.forEach(function(link) {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
});