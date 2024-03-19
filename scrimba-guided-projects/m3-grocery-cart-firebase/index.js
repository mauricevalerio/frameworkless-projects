import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-b5356-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const groceryListInDB = ref(database, "groceryList")

const addToCartBtn = document.getElementById("add-button")
const inputEl = document.getElementById("input-field")
const groceryListEl = document.getElementById("grocery-list")

onValue(groceryListInDB, function (snapshot) {
    if (snapshot.exists()) {
        let groceryListArray = Object.entries(snapshot.val())

        clearGroceryList()
        for (let groceryItem of groceryListArray) {

            addToGroceryList(groceryItem)
        }
    } else {
        groceryListEl.innerHTML = "No items yet...."
    }
})

function clearGroceryList() {
    groceryListEl.innerHTML = ""
}

function clearInput() {
    inputEl.value = ""
}

function addToGroceryList(groceryItem) {

    let groceryItemId = groceryItem[0], groceryItemValue = groceryItem[1]

    let newLiEl = document.createElement("li")
    let newSpanEl = document.createElement("span")

    newLiEl.textContent = groceryItemValue

    newLiEl.addEventListener("click", function () {
        let wasActive = newSpanEl.classList.contains("delete-item")

        if (wasActive) {
            newSpanEl.textContent = ""
            newSpanEl.classList.remove("delete-item")
        } else {
            newSpanEl.textContent = "X"
            newLiEl.append(newSpanEl)
            newSpanEl.classList.add("delete-item")
        }
    })

    newSpanEl.addEventListener("click", function () {
        let exactLocationOfItemInDB = ref(database, `groceryList/${groceryItemId}`)
        remove(exactLocationOfItemInDB)
    })

    groceryListEl.append(newLiEl)

}

function addToCart(e) {
    e.preventDefault()
    let groceryItem = inputEl.value

    if (groceryItem) {
        inputEl.placeholder = "Bread"
        inputEl.classList.remove("error")
        push(groceryListInDB, groceryItem)
    } else {
        inputEl.placeholder = "Please enter an item here"
        inputEl.classList.add("error")
    }

    clearInput()
}

addToCartBtn.addEventListener("click", addToCart)