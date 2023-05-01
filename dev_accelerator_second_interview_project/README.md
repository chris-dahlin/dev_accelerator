# dev_accelerator__Interview_second_project
Second Project for Dev Accelerator Interview - Picture Slideshow


~ How JS works ~

The variable slideIndex is set to 1 and the function showSlides(slideIndex) is called to display the first slide.

The plusSlides(n) function is used to navigate between slides by adding the value n to the current slideIndex value and calling showSlides() with the updated slideIndex value.

The currentSlide(n) function is used to display a specific slide by setting the slideIndex to the value of n and calling showSlides().

The showSlides(n) function is responsible for displaying the appropriate slide. It first checks if n is greater than the total number of slides (slides.length), and if so, it resets the slideIndex to 1. It then checks if n is less than 1 and if so, it sets slideIndex to the total number of slides. Then, it loops through all the slides and sets their display to "none" to hide them. Finally, it sets the display of the current slide (determined by slideIndex) to "block" to show it.

The prevSlide() and nextSlide() functions are shortcuts for navigating to the previous and next slide, respectively, by calling plusSlides(-1) and plusSlides(1).

Lastly, the Date() function is called to get the current date and time and its value is assigned to the variable date. However, this variable is not used anywhere else in the code, so it may be unnecessary.