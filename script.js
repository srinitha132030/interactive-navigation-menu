// Select navbar
const navbar = document.getElementById("navbar");

// Add scroll event
window.addEventListener("scroll", function(){

  // Check scroll position
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }
  else{
    navbar.classList.remove("scrolled");
  }

});