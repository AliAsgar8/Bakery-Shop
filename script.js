const closeMenu = () => {
    console.log("hit");
    
}

const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close_icon');
const sideNavbar = document.querySelector('.side_navbar');

hamburger.addEventListener('click', () => {
    sideNavbar.classList.add('active'); // Add a class to make the navbar visible
});

closeIcon.addEventListener('click', () => {
    sideNavbar.classList.remove('active'); // Remove the class to hide the navbar
});
