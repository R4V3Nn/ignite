(function () {
  var toggle = document.getElementById('header-nav-toggle')
  var nav = document.getElementById('header-nav');

  toggle.className = 'is-visible';
  nav.className = 'is-hidden';

  toggle.addEventListener('click', function () {
    if (nav.className === 'is-hidden') {
      nav.className = '';
    } else {
      nav.className = 'is-hidden';
    }
  })
})();

//SLIDER

var slideIndex = 0;

var next = document.getElementsByClassName("next")[0].onclick = function plusSlides() {
  showSlides(slideIndex += 1);

  clearInterval(auto);
  setTimeout(function () {
    auto = window.setInterval(autoPlay, 3000);
  }, 5000);
};


var prev = document.getElementsByClassName("prev")[0].onclick = function minusSlides() {
  showSlides(slideIndex -= 1);

  clearInterval(auto);
  setTimeout(function () {
    auto = window.setInterval(autoPlay, 3000);
  }, 5000);
};


function showSlides() {
  var slides = document.getElementsByClassName("slide");


  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

}

function autoPlay() {
  slideIndex++;
  showSlides();
}

var auto = window.setInterval(autoPlay, 3000);
