// Toggle icon for navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Sticky header
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Close the menu if scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// Close the menu when a navbar link is clicked
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});






