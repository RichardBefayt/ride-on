// Définition variables
const navbar = document.querySelector('.background .header .navbar');

// Évènements
document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');   
}

window.onscroll = () => {
   navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () => {
       if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});


// ***** Planning ***** //


// ***** AOS ***** //
AOS.init({
    delay: 200,
    duration: 400,
 });