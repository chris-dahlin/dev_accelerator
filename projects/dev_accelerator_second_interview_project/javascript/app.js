var slideIndex = 1;
showSlides(slideIndex);

//The variable slideIndex is set to 1 and the function showSlides(slideIndex) is called to display the first slide.

function plusSlides(n) {
  showSlides(slideIndex += n);
}

//The plusSlides(n) function is used to navigate between slides by adding the value n to the current slideIndex value and calling showSlides() with the updated slideIndex value.

function currentSlide(n) {
  showSlides(slideIndex = n);
}

//The currentSlide(n) function is used to display a specific slide by setting the slideIndex to the value of n and calling showSlides().

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//The showSlides(n) function is responsible for displaying the appropriate slide. 
//It first checks if n is greater than the total number of slides (slides.length), 
//and if so, it resets the slideIndex to 1. It then checks if n is less than 1 and if so, 
//it sets slideIndex to the total number of slides. Then, it loops through all the slides and sets their display to "none" to hide them. Finally, 
//it sets the display of the current slide (determined by slideIndex) to "block" to show it.

function prevSlide() {
  plusSlides(-1);
}
 //The prevSlide() and nextSlide() functions are shortcuts for navigating to the previous and next slide, respectively, by calling plusSlides(-1) and plusSlides(1).

function nextSlide() {
  plusSlides(1);
}

//The prevSlide() and nextSlide() functions are shortcuts for navigating to the previous and next slide, respectively, by calling plusSlides(-1) and plusSlides(1).