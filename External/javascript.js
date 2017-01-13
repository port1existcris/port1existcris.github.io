var slideIndex = 0;
var w = window.innerWidth

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("imgs");
    for(i = 0; i < slides.length; i++){
       slides[i].style.display = "none";}
    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000);}

function cheight(){
	if(w > 500){
		var img = document.getElementsByClassName("imgs");
		var imgHeight = img[0].height;
		var winh = window.innerHeight;
		var newHeight = winh - imgHeight;
		var content = document.getElementById("content");
		
		content.style.height=newHeight + "px";
	}
}

window.onresize = function(){
	if(w > 500){
		var img = document.getElementsByClassName("imgs");
		var imgHeight = img[0].height;
		var winh = window.innerHeight;
		var newHeight = winh - imgHeight;
		var content = document.getElementById("content");
		
		content.style.height=newHeight + "px";
	}
}