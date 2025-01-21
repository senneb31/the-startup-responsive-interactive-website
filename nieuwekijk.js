// query the hamburger menu button
const openButton = document.querySelector(".hamburger");
// add click event to the hamburger menu for opening the menu
openButton.addEventListener("click", openMenu);

const deNav = document.querySelector("nav");
function openMenu() {  
  deNav.classList.toggle("nav-open"); 
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.0,
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, options);
  
  /**
   * schrijf hier ff op wat alles doet
   */
  const meters = document.querySelectorAll("meter");
  meters.forEach((el) => {
    observer.observe(el);
  })