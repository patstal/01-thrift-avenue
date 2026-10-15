/*jslint es6:true*/

// learned by tutorial about nav bar at multiwebpress.com/responsive-navigation-bar-header-in-html-css-javascript/ 

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    // Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });

    // Animation
    hamburger.classList.toggle("toggle");
  });
}

//javascript below learned at https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

// this code enables to show the next slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// this code makes it possible to control thumbnails
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Other pages use the same script but do not contain a slideshow.
  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}
