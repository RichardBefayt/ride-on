// Définition variables
const navbar = document.querySelector('.header .navbar');
const background = document.querySelector('.bg-home');


// Évènements
document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');   
}

window.onscroll = () => {
   navbar.classList.remove('active');
}


// ***** Planning ***** //

// ***** AOS ***** //
AOS.init({
    delay: 200,
    duration: 400,
 });