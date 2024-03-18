const subscribe = document.getElementById("form-subscribe")
const inputEmailDiv = document.querySelector(".subscribe .email-input")

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

subscribe.addEventListener("submit", function (e) {
    e.preventDefault()
    const formData = new FormData(this)
    const userInputEmail = Object.fromEntries(formData).email

    if (validateEmail(userInputEmail)) {
        inputEmailDiv.classList.remove("error")
        this.reset()
    } else {
        inputEmailDiv.classList.add("error")
    }
})