alert("After pressing OK, rest of script will be executed");
var target = document.firstElementChild.lastElementChild.querySelector("UL").lastElementChild;

function changeText() {
    target.innerHTML = "<strong>hi</strong>";
    target.style.color = "green";
}

function changeTextBack() {
    target.innerHTML = "Third";
    target.style.color = "black";
}

function editLink () {
    linkTag.innerText = "Google :)"; 
    linkTag.style.color = "red";
}

function editLinkBack() {
    linkTag.innerText = "Google"; // ? this removes the <strong> tag
    linkTag.style.color = "blue"; //  changing styles in JS exactly same as CSS e.g. font-size -> fontSize
}

//document.getElementById("scriptTriggerOne").addEventListener("click", changeText);
//document.getElementById("scriptTriggerTwo").onclick = changeTextBack;
// alternatively: document.getElementById("scriptTriggerTwo").addEventListener("click", changeTextBack);

document.querySelector("#scriptTriggerOne").onclick = changeText;
document.querySelector("#scriptTriggerTwo").onclick = changeTextBack;

// how to select anchor tag within element with class called list
var linkTag = document.querySelector(".list a");

document.querySelectorAll("button")[2].onclick = editLink;
document.querySelectorAll("button")[3].onclick = editLinkBack;


// this way is preferred (seperation of concerns)

function backgroundChange() {
    document.querySelector("body").classList.toggle("green-bg");
}

document.querySelectorAll("button")[4].onclick = backgroundChange;