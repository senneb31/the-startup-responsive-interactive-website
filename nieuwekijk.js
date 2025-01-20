// query the hamburger menu button
const openButton = document.querySelector(".hamburger");
// add click event to the hamburger menu for opening the menu
openButton.addEventListener("click", openMenu);

const deNav = document.querySelector("nav");
function openMenu() {  
  deNav.classList.toggle("nav-open"); 
}