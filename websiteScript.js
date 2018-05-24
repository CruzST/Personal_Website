/******************************
	This File contains the scripts
	for the website

*******************************/



/***********************************************************************************
    Slideshow/Carosuel
  This code segment will allow the user to click the left and right buttons 
  on the portfolio page.  The images will toggle off all the displays
  and then turn on an image based on the class index.
*************************************************************************************/
var slideIndex = 1;				// Index will begin with one

/***********************************************************
	This function will be used within the html file
	The int will be replaced with a -1 or 1, left/right
***********************************************************/
function slideNav(int) {
	showSlide(slideIndex += int);
}

/***********************************************************
	This function does the actual work.  It gets the amount
	of slides in the "slides" class and will calculate an
	index.  It will then turn off all the slides via
	display:none and then show the calculated index slide via
	display:block
************************************************************/
function showSlide(int) {
	var slide = document.getElementsByClassName("slides");
	if (int > slide.length) {
		slideIndex = 1;
	} else if (int < 1) {
		slideIndex = slide.length;
	}
	for (var i = 0; i < slide.length; i++){
		slide[i].style.display = "none";
	}
	slide[slideIndex - 1].style.display = "block";
}