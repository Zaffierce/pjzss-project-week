var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(slideNumber) {
  var slides = document.getElementsByClassName('mySlides');
  // var dots = document.getElementsByClassName('dot');
  if (slideNumber > slides.length) {slideIndex = 1;}
  if (slideNumber < 1) {slideIndex = slides.length;}
  for (var i = 0; i < slides.length; i++) {
    //set forEach
    slides[i].style.display = 'none';
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(' active', '');
  // }
  slides[slideIndex-1].style.display = 'block';
  // dots[slideIndex-1].className += ' active';
}
