const accordions = document.getElementsByClassName("btn-accordion")

const accordionContents = [
    {
        id: "1",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`
    },
    {
        id: "2",
        content: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`
    },
    {
        id: "3",
        content: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.`
    },
    {
        id: "4",
        content: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.`
    },
]

function createContentElement(content) {
    const p = document.createElement("p")
    p.innerText = content
    return p
}

function findContent(contentId) {
    const findContent = accordionContents.find(item => item.id === contentId)
    return createContentElement(findContent.content)
}

function updateCurrentAccordion(accordionId) {
    let activeAccordionId = accordionId

    for (let i = 0; i < accordions.length; i++) {
        if (activeAccordionId === accordions[i].dataset.accordionId) {
            if (!accordions[i].nextElementSibling) {
                accordions[i].classList.add("active")
                accordions[i].insertAdjacentElement("afterend", findContent(accordions[i].dataset.accordionId))
            } else {
                accordions[i].classList.remove("active")
                accordions[i].nextElementSibling.remove()
            }

        } else {
            accordions[i].classList.remove("active")
            if (accordions[i].nextElementSibling) {
                accordions[i].nextElementSibling.remove()
            }
        }
    }
}

function accordionEventListeners() {
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function (e) {
            updateCurrentAccordion(e.target.dataset.accordionId)
        })
    }
}

accordionEventListeners()

/* insert inside event listener for multiple active accordions
remove updateCurrentAccordion function

this.classList.toggle("active")

if (!this.nextElementSibling) {
    this.insertAdjacentElement("afterend", findContent(e.target.dataset.accordionId))
} else {
    this.nextElementSibling.remove()
}
*/