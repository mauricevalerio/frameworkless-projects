const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalInner = document.getElementById("modal-inner");
const declineBtn = document.querySelector("button[type='button']");
const modalChoiceBtn = document.getElementById("modal-choice-btns");

setTimeout(() => {
	modal.style.display = "block";
}, 3000);

modalCloseBtn.addEventListener("click", (e) => {
	modal.style.display = "none";
})

declineBtn.addEventListener("mouseenter", (e) => {
	modalChoiceBtn.classList.toggle("modal-choice-btns-reverse");
})

function delaySoldDataText() {
	setTimeout(() => {
		while (modalInner.firstChild) {
			modalInner.removeChild(modalInner.firstChild); //clears DOM elements inside modalInner
		}
		const consentFormData = new FormData(consentForm);
		const fullName = consentFormData.get("fullName");
		
		const h2 = document.createElement("h2");
		const p = document.createElement("p");
		const gifDiv = document.createElement("div");
		const imgPirate = document.createElement("img");
		
		h2.innerHTML = `Thanks <span class="modal-display-name">${fullName}</span> for the data!`
		p.textContent = "We just sold your data!"
		gifDiv.classList.add("idiot-gif")
		imgPirate.src = "images/pirate.gif"
		
		gifDiv.append(imgPirate);
		
		modalInner.append(h2);
		modalInner.append(p);
		modalInner.append(gifDiv);
		
		modalCloseBtn.disabled = false;
		
	}, 1500)
}

function delayDisplayModalText(text) {
	setTimeout(() => {
		text.textContent = "Making the sale..."
		delaySoldDataText();
	}, 1500)
}

consentForm.addEventListener("submit", (e) => {
	e.preventDefault();
	
	const divModalInnerLoading = document.createElement("div");
	const imgLoading = document.createElement("img");
	const uploadText = document.createElement("p");
	
	divModalInnerLoading.classList.add("modal-inner-loading");
	imgLoading.classList.add("loading");
	imgLoading.src = "images/loading.svg";
	uploadText.textContent = "Uploading your data to the dark web";
	
	divModalInnerLoading.append(imgLoading);
	divModalInnerLoading.append(uploadText);
	
	modalText.textContent = "";
	modalText.append(divModalInnerLoading);
	
	delayDisplayModalText(uploadText);
	
})