export class BlueBg extends HTMLElement {
    constructor() {
        super()
        console.log(this)
    }
}

customElements.define("blue-bg", BlueBg)