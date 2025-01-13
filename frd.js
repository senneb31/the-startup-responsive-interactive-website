const openButton = document.querySelector(".hamburger");


openButton.addEventListener("click", openMenu);


function openMenu() {  

  const deNav = document.querySelector("nav");

  deNav.classList.toggle("nav-open"); }

const sluitButton = document.querySelector(".hamburger-open");

let Button = document.querySelector('meter');

Button.addEventListener ('click', checkState)

function checkState(){
  console.log('het werkt')
}
