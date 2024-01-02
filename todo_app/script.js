const inputBox = document.getElementById("input_box")
const listContainer = document.getElementById("list_container")

function addTask() {
    if (inputBox.value === '') {
        alert("You must write a task")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveDataInLocalStorage();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDataInLocalStorage()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDataInLocalStorage();
    }
}, false);
function saveDataInLocalStorage() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();