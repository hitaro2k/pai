let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	burgerMenu.style.display = "block";
})

function scrollTo(element){
	window.scroll({
			left: 0,
			top: element.offsetTop,
			behavior: "smooth"
		})

}
// header
// var contact= document.getElementById("contact");
// var gallery = document.getElementById("gallery");
// var about = document.getElementById("about");

// Page
// var callForm = document.querySelector(".call-form__container");
// var galleryPage = document.querySelector(".gallery__container");
// var aboutPage = document.querySelector(".aboutus__container");

// contact.onclick = function(){
// 	scrollTo(callForm);
// }
// gallery.onclick = function(){
// 	scrollTo(galleryPage);
// }
// about.onclick = function(){
// 	scrollTo(aboutPage)
// }

// Mobile
// var galleryPageMobile = document.getElementById("gallery-mobile")
// var aboutPageMobile = document.getElementById("about-mobile")
// var callFormPageMobile = document.getElementById("contact-mobile")
// var burgerMenu = document.querySelector(".menu-list")


// callFormPageMobile.onclick = function(){
// 	scrollTo(callForm)
// 	burgerMenu.style.display = "none";
	
// }
// galleryPageMobile.onclick = function(){
// 	scrollTo(galleryPage)
// 	burgerMenu.style.display = "none";
	
// }
// aboutPageMobile.onclick = function(){
// 	scrollTo(aboutPage)
// 	burgerMenu.style.display = "none";
	
// }

