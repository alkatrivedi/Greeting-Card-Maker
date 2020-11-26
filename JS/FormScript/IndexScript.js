var xx = document.querySelector("#scrollTopBtn");

function scrollToTop() {
    window.scrollTo(0,0); 
} 

window.addEventListener("scroll", function(){
  if(window.scrollY==0){
    //user is at the top of the page; no need to show the back to top button
    xx.style.display = "";
  } else {
    xx.style.display = "block";
  }
});