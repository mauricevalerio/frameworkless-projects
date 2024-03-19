function reveal() {
	let reveals = document.querySelectorAll(".reveal");
	
	for (let i = 0; i < reveals.length; i++) {
	let windowHeight = window.innerHeight; //height of the viewport
	let elementTop = reveals[i].getBoundingClientRect().top; //provides distance from the top of the viewport
	let elementVisible = 75;
	
		if (elementTop < windowHeight - elementVisible) {
		  reveals[i].classList.add("active");
		} else {
		  reveals[i].classList.remove("active");
		}
	}

}

window.addEventListener("scroll", reveal);

reveal();