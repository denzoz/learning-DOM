alert("After pressing OK, rest of script will be executed");
var target = document.firstElementChild.lastElementChild.querySelector("UL").lastElementChild;

function changeText() {
    target.innerHTML = "hi";
    target.style.color = "green";
}

function changeTextBack() {
    target.innerHTML = "Third";
    target.style.color = "black";
}

function editLink () {
    linkTag.innerHTML = "Google :)";
}

function undoChange() {
    linkTag.innerHTML = "Google";
}

//document.getElementById("scriptTriggerOne").addEventListener("click", changeText);
//document.getElementById("scriptTriggerTwo").onclick = changeTextBack;
// alternatively: document.getElementById("scriptTriggerTwo").addEventListener("click", changeTextBack);

document.querySelector("#scriptTriggerOne").onclick = changeText;
document.querySelector("#scriptTriggerTwo").onclick = changeTextBack;

// how to select anchor tag within element with id called list
var linkTag = document.querySelector("#list a");

document.getElementsByTagName("button")[2].onclick = editLink;
