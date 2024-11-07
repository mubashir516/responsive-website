// Get elements
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const links = document.querySelectorAll('.nav-links a'); // All navigation links

// Toggle menu visibility when hamburger is clicked
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('visible');
    document.body.classList.toggle('menu-open');
});

// Close the menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('visible');
        document.body.classList.remove('menu-open');
    });
});

// Close the menu if clicked outside the nav
document.addEventListener('click', function(event) {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('visible');
        document.body.classList.remove('menu-open');
    }
});
