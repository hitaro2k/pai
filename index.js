let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
const burgerMenu = document.querySelector(".menu-list")
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	burgerMenu.style.display = "block";
})

const links = document.querySelectorAll("a[href*='#']")
for(let link of links){
	link.addEventListener("click" , function(event){
		burgerMenu.style.display = "none";
		event.preventDefault();
		const blockID = link.getAttribute("href")
		document.querySelector("" + blockID ).scrollIntoView({
			behavior:"smooth",
			block:"start"
		})
	})
}